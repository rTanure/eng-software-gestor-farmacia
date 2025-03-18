package com.example.farmacia.controllers;

import com.example.farmacia.dtos.ClientFilterRequestDTO;
import com.example.farmacia.dtos.CreateClientRequestDTO;
import com.example.farmacia.dtos.DeleteClientDTO;
import com.example.farmacia.entidades.Client;
import com.example.farmacia.services.ClientService;
import lombok.RequiredArgsConstructor;
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
    public ResponseEntity<Void> addNewClient(@RequestBody CreateClientRequestDTO createClientRequestDTO) {
        clientService.save(createClientRequestDTO);

        return ResponseEntity.ok().build();
    }

    @GetMapping("/findByCpf")
    public ResponseEntity<Client> getClientByCpf(@RequestParam ClientFilterRequestDTO clientFilterRequestDTO) {
        Client findClient = clientService.findByCpf(clientFilterRequestDTO);

        return ResponseEntity.ok(findClient);
    }

    @GetMapping("/findByName")
    public ResponseEntity<Client> getClientByName(@RequestParam ClientFilterRequestDTO clientFilterRequestDTO) {
        Client findClient = clientService.findByName(clientFilterRequestDTO);

        return ResponseEntity.ok(findClient);
    }

    @DeleteMapping("/delete")
    public ResponseEntity<Void> deleteClient(@RequestParam DeleteClientDTO deleteClientDTO) {
        clientService.deleteById(deleteClientDTO.getId());

        return ResponseEntity.noContent().build();
    }
}
