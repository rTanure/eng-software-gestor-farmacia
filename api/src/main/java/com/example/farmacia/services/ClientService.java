package com.example.farmacia.services;

import com.example.farmacia.dtos.CreateClientRequestDTO;
import com.example.farmacia.entidades.Client;
import com.example.farmacia.repositories.ClientRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

@Service
@RequiredArgsConstructor
public class ClientService {

    private final ClientRepository clientRepository;

    public void save(CreateClientRequestDTO createClientRequestDTO) {
        Client client = createClientRequestDTO.toModel();

        if (clientRepository.findByCpf(createClientRequestDTO.getCpf()) == null) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "CPF já cadastrado");
        }

        clientRepository.save(client);
    }

}
