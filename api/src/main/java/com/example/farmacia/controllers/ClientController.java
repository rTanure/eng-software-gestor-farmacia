package com.example.farmacia.controllers;

import com.example.farmacia.dtos.request.ClientCreatRequestDTO;
import com.example.farmacia.dtos.request.ClientFilterRequestDTO;
import com.example.farmacia.dtos.request.ClientUpdateRequestDTO;
import com.example.farmacia.dtos.response.ClientResponseDTO;
import com.example.farmacia.services.ClientService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.BeanUtils;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/client")
@CrossOrigin(origins = "*")
@RequiredArgsConstructor
public class ClientController implements IClientController {
    private final ClientService clientService;

    public ResponseEntity<Void> createClient(@RequestBody ClientCreatRequestDTO clientCreatRequestDTO) {
        clientService.createClient(clientCreatRequestDTO);

        return ResponseEntity.ok().build();
    }

    public ResponseEntity<List<ClientResponseDTO>> listClients(@ModelAttribute ClientFilterRequestDTO clientFilterRequestDTO){
        var clients = clientService.findByFilter(clientFilterRequestDTO);
        List<ClientResponseDTO> clientDTOs = clients.stream()
                .map(client -> {
                    ClientResponseDTO dto = new ClientResponseDTO();
                    BeanUtils.copyProperties(client, dto);
                    return dto;
                })
                .toList();
        return ResponseEntity.ok(clientDTOs);
    }

    public ResponseEntity<ClientResponseDTO> getClient(@PathVariable UUID id) {
        var client = clientService.getClient(id);
        ClientResponseDTO dto = new ClientResponseDTO();

        BeanUtils.copyProperties(client, dto);

        return ResponseEntity.ok(dto);
    }

    public ResponseEntity<Void> updateClientById(@RequestBody ClientUpdateRequestDTO clientUpdateRequestDTO) {
        clientService.updateClientById(clientUpdateRequestDTO);

        return ResponseEntity.ok().build();
    }

    public ResponseEntity<Void> deleteClient(@PathVariable UUID id) {
        clientService.deleteById(id);

        return ResponseEntity.ok().build();
    }
}
