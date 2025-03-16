package com.example.farmacia.controllers;

import com.example.farmacia.dtos.CreateClientRequestDTO;
import com.example.farmacia.services.ClientService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("client")
@CrossOrigin(origins = "*")
@RequiredArgsConstructor
public class ClientController {


    private final ClientService clientService;

    @PostMapping()
    public ResponseEntity<Void> addNewClient(@RequestBody CreateClientRequestDTO createClientRequestDTO) {
        clientService.save(createClientRequestDTO);

        return ResponseEntity.ok().build();
    }
}
