package com.example.farmacia.controllers;

import com.example.farmacia.dtos.*;
import com.example.farmacia.services.ClientService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.BeanUtils;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/clients")
@CrossOrigin(origins = "*")
@RequiredArgsConstructor
public class ClientController {


    private final ClientService clientService;

    @PostMapping()
    public ResponseEntity<Void> addNewClient(@RequestBody ClientCreatRequestDTO clientCreatRequestDTO) {
        clientService.save(clientCreatRequestDTO);

        return ResponseEntity.ok().build();
    }

    @GetMapping("/find")
    public ResponseEntity<List<ClientResponseFindDTO>> getClient(@ModelAttribute ClientFilterRequestDTO clientFilterRequestDTO){
        var clients = clientService.findByFilter(clientFilterRequestDTO);

        List<ClientResponseFindDTO> clientDTOs = clients.stream()
                .map(client -> {
                    ClientResponseFindDTO dto = new ClientResponseFindDTO();
                    BeanUtils.copyProperties(client, dto);
                    return dto;
                })
                .toList();

        return ResponseEntity.ok(clientDTOs);
    }

    @GetMapping
    public ResponseEntity<List<ClientResponseFindDTO>> getAllClients() {
        var clients = clientService.listClients();

        List<ClientResponseFindDTO> clientDTOs = clients.stream()
                .map(client -> {
                    ClientResponseFindDTO dto = new ClientResponseFindDTO();
                    BeanUtils.copyProperties(client, dto);
                    return dto;
                })
                .toList();

        return ResponseEntity.ok(clientDTOs);
    }

    @PutMapping("/{clientId}")
    public ResponseEntity<Void> updateClientById(@PathVariable("clientId") String userId,
                                                 @RequestBody ClientUpdateDTO clientUpdateDTO) {
        clientService.updateClientById(userId, clientUpdateDTO);

        return ResponseEntity.ok().build();
    }

    @DeleteMapping("/delete")
    public ResponseEntity<Void> deleteClient(@RequestParam ClientDeleteDTO clientDeleteDTO) {
        clientService.deleteById(clientDeleteDTO.getId());

        return ResponseEntity.ok().build();
    }
}
