package com.example.farmacia.services;

import com.example.farmacia.dtos.BuscaExampleRequestDTO;
import com.example.farmacia.entidades.Example;
import com.example.farmacia.repositories.ExampleRepositorio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.Optional;

@Service
public class ExampleService implements IExampleService {

    @Autowired
    ExampleRepositorio exampleRepositorio;

    public Example buscarValorPorId(BuscaExampleRequestDTO buscaExampleDTO) {
        Optional<Example> exampleOptional = exampleRepositorio.findById(buscaExampleDTO.getId());

        if(exampleOptional.isEmpty()) throw new ResponseStatusException(HttpStatus.NOT_FOUND);

        return exampleOptional.get();
    }
}
