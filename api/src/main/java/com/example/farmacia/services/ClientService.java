package com.example.farmacia.services;

import com.example.farmacia.dtos.request.ClientFilterRequestDTO;
import com.example.farmacia.entidades.Client;
import com.example.farmacia.repositories.ClientRepository;
import com.example.farmacia.repositories.PrescriptionRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.BeanUtils;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.ExampleMatcher;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class ClientService {

    private final ClientRepository clientRepository;
    private final PrescriptionRepository prescriptionRepository;

    public void createClient(Client client) {
        if (clientRepository.findByCpf(client.getCpf()) != null) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Cliente já cadastrado");
        }
        client.setId(null);
        clientRepository.save(client);
    }

    public Client getClient(UUID id) {
        return clientRepository.findById(id).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Cliente não encontrado."));
    }

    public List<Client> findByFilter(ClientFilterRequestDTO clientFilterRequestDTO) {
        Client c = new Client();

        BeanUtils.copyProperties(clientFilterRequestDTO, c);

        ExampleMatcher matcher = ExampleMatcher.matching()
                .withIgnoreCase()
                .withIgnoreNullValues()
                .withStringMatcher(ExampleMatcher.StringMatcher.CONTAINING);

        Example<Client> example = Example.of(c, matcher);

        return clientRepository.findAll(example);
    }

    @Transactional
    public void deleteById(UUID id) {
        var userExists = clientRepository.existsById(id);
        prescriptionRepository.deleteAllByClientId(id);

        if (userExists) {
            clientRepository.deleteById(id);
        }
    }

    public void updateClientById(Client client) {
        if (clientRepository.findById(client.getId()).isEmpty()) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Cliente não encontrado");
        }
        clientRepository.save(client);
    }
}
