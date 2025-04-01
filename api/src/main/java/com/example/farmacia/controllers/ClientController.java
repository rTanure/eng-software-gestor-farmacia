package com.example.farmacia.controllers;

import com.example.farmacia.dtos.request.ClientCreatRequestDTO;
import com.example.farmacia.dtos.request.ClientFilterRequestDTO;
import com.example.farmacia.dtos.request.ClientUpdateRequestDTO;
import com.example.farmacia.dtos.response.ClientResponseDTO;
import com.example.farmacia.entidades.Client;
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
public class ClientController {
    private final ClientService clientService;

    @PostMapping()
    public ResponseEntity<Void> createClient(@RequestBody Client client) {
        clientService.createClient(client);

        return ResponseEntity.ok().build();
    }

    @GetMapping()
    public ResponseEntity<List<Client>> listClients(@ModelAttribute ClientFilterRequestDTO clientFilterRequestDTO){
        var clients = clientService.findByFilter(clientFilterRequestDTO);
        return ResponseEntity.ok(clients);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Client> getClient(@PathVariable UUID id) {
        var client = clientService.getClient(id);
        return ResponseEntity.ok(client);
    }

    @PutMapping()
    public ResponseEntity<Void> updateClientById(@RequestBody Client client) {
        clientService.updateClientById(client);

        return ResponseEntity.ok().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteClient(@PathVariable UUID id) {
        clientService.deleteById(id);

        return ResponseEntity.ok().build();
    }
}
