package com.example.farmacia.services;

import com.example.farmacia.dtos.ClientFilterRequestDTO;
import com.example.farmacia.dtos.CreateClientRequestDTO;
import com.example.farmacia.dtos.UpdateClientDTO;
import com.example.farmacia.entidades.Client;
import com.example.farmacia.repositories.ClientRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.UUID;

@Service
@RequiredArgsConstructor
public class ClientService {

    private final ClientRepository clientRepository;

    public void save(CreateClientRequestDTO createClientRequestDTO) {
        Client client = createClientRequestDTO.toModel();

        if (clientRepository.findByCpf(createClientRequestDTO.getCpf()) != null) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "CPF já cadastrado");
        }

        clientRepository.save(client);
    }

    public Client findByCpf(ClientFilterRequestDTO clientFilterRequestDTO) {

        Client c = clientRepository.findByCpf(clientFilterRequestDTO.getCpf());

        if (c == null) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "CPF não encontrado");
        }
        return c;
    }

    public Client findByName(ClientFilterRequestDTO clientFilterRequestDTO) {

        Client c = clientRepository.findByName(clientFilterRequestDTO.getName());

        if (c == null) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Nome não encontrado");
        }
        return c;
    }

    public void deleteById(UUID id) {
        var userExists = clientRepository.existsById(id);

        if (userExists) {
            clientRepository.deleteById(id);
        }
    }

    public void updateClientById(String userId, UpdateClientDTO updateClientDTO) {
        var id = UUID.fromString(userId);

        var client = clientRepository.findById(id);

        if (client.isEmpty()) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Cliente não encontrado");
        }

        var c = client.get();

        if (updateClientDTO.getName() != null) {
            c.setName(updateClientDTO.getName());
        }

        if (updateClientDTO.getPhoneNumber() != null) {
            c.setPhoneNumber(updateClientDTO.getPhoneNumber());
        }

        if (updateClientDTO.getDateOfBirth() != null) {
            c.setDateOfBirth(updateClientDTO.getDateOfBirth());
        }

        if (updateClientDTO.getSex() != null) {
            c.setSex(updateClientDTO.getSex());
        }

        clientRepository.save(c);
    }

}
