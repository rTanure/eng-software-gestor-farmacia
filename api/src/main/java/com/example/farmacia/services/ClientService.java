package com.example.farmacia.services;

import com.example.farmacia.dtos.ClientFilterRequestDTO;
import com.example.farmacia.dtos.ClientCreatRequestDTO;
import com.example.farmacia.dtos.ClientUpdateDTO;
import com.example.farmacia.entidades.Client;
import com.example.farmacia.repositories.ClientRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.time.Instant;
import java.util.UUID;
import java.util.List;

@Service
@RequiredArgsConstructor
public class ClientService {

    private final ClientRepository clientRepository;

    public void save(ClientCreatRequestDTO clientCreatRequestDTO) {

        var entity = new Client(UUID.randomUUID(),
                null,
                clientCreatRequestDTO.getName(),
                clientCreatRequestDTO.getCpf(),
                clientCreatRequestDTO.getEmail(),
                clientCreatRequestDTO.getPhoneNumber(),
                clientCreatRequestDTO.getDateOfBirth(),
                clientCreatRequestDTO.getSex(),
                Instant.now(),
                null);

        if (clientRepository.findByCpf(clientCreatRequestDTO.getCpf()) != null) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Cliente já cadastrado");
        }

        clientRepository.save(entity);
    }

    public List<Client> listClients() {
        return clientRepository.findAll();
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

    public void updateClientById(String userId, ClientUpdateDTO clientUpdateDTO) {
        var id = UUID.fromString(userId);

        var client = clientRepository.findById(id);

        if (client.isEmpty()) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Cliente não encontrado");
        }

        var c = client.get();

        if (clientUpdateDTO.getName() != null) {
            c.setName(clientUpdateDTO.getName());
        }

        if (clientUpdateDTO.getPhoneNumber() != null) {
            c.setPhoneNumber(clientUpdateDTO.getPhoneNumber());
        }

        if (clientUpdateDTO.getDateOfBirth() != null) {
            c.setDateOfBirth(clientUpdateDTO.getDateOfBirth());
        }

        if (clientUpdateDTO.getSex() != null) {
            c.setSex(clientUpdateDTO.getSex());
        }

        c.setUpdateDate(Instant.now());

        clientRepository.save(c);
    }

}
