package com.example.farmacia.controllers;

import com.example.farmacia.dtos.request.ClientCreatRequestDTO;
import com.example.farmacia.dtos.request.ClientFilterRequestDTO;
import com.example.farmacia.dtos.request.ClientUpdateRequestDTO;
import com.example.farmacia.dtos.response.ClientResponseDTO;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;


public interface IClientController {
    @PostMapping()
    ResponseEntity<Void> createClient(@RequestBody ClientCreatRequestDTO clientCreatRequestDTO);

    @GetMapping()
    ResponseEntity<List<ClientResponseDTO>> listClients(@ModelAttribute ClientFilterRequestDTO clientFilterRequestDTO);

    @GetMapping("/{id}")
    ResponseEntity<ClientResponseDTO> getClient(@PathVariable UUID id);

    @PutMapping()
    ResponseEntity<Void> updateClientById(@RequestBody ClientUpdateRequestDTO clientUpdateRequestDTO);

    @DeleteMapping("/{id}")
    ResponseEntity<Void> deleteClient(@PathVariable UUID id);
}
