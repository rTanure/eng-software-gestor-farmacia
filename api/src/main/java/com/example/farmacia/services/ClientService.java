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
import org.springframework.beans.BeanUtils;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.ExampleMatcher;

import java.time.Instant;
import java.time.LocalDateTime;
import java.util.UUID;
import java.util.List;

@Service
@RequiredArgsConstructor
public class ClientService {

    private final ClientRepository clientRepository;

    public void save(ClientCreatRequestDTO clientCreatRequestDTO) {

        var entity = clientCreatRequestDTO.toModel();

        if (clientRepository.findByCpf(clientCreatRequestDTO.getCpf()) != null) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Cliente já cadastrado");
        }

        clientRepository.save(entity);
    }

    public List<Client> listClients() {
        return clientRepository.findAll();
    }

    public List<Client> findByFilter(ClientFilterRequestDTO clientFilterRequestDTO) {
        Client c = new Client();

        BeanUtils.copyProperties(c, clientFilterRequestDTO);

        ExampleMatcher matcher = ExampleMatcher.matching()
                .withIgnoreCase()
                .withIgnoreNullValues()
                .withStringMatcher(ExampleMatcher.StringMatcher.CONTAINING);

        Example<Client> example = Example.of(c, matcher);

        return clientRepository.findAll(example);
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
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Cliente não encontrado");
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

        if (clientUpdateDTO.getGender() != null) {
            c.setGender(clientUpdateDTO.getGender());
        }

        c.setUpdateDate(LocalDateTime.now());

        clientRepository.save(c);
    }

}
