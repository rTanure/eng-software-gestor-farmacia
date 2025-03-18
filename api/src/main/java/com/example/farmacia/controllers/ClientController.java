package com.example.farmacia.controllers;

import com.example.farmacia.dtos.ClientFilterRequestDTO;
import com.example.farmacia.dtos.ClientCreatRequestDTO;
import com.example.farmacia.dtos.ClientDeleteDTO;
import com.example.farmacia.dtos.ClientUpdateDTO;
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
    public ResponseEntity<Void> addNewClient(@RequestBody ClientCreatRequestDTO clientCreatRequestDTO) {
        clientService.save(clientCreatRequestDTO);

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

    @GetMapping
    public ResponseEntity<List<Client>> getAllClients() {
        var clients = clientService.listClients();

        return ResponseEntity.ok(clients);
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
