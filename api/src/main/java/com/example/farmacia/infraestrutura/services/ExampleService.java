package com.example.farmacia.infraestrutura.services;

import com.example.farmacia.dominio.dtos.BuscaExampleDTO;
import com.example.farmacia.dominio.models.Example;
import com.example.farmacia.infraestrutura.entidades.ExampleEntidade;
import com.example.farmacia.infraestrutura.repositories.ExampleRepositorio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.Optional;

@Service
public class ExampleService implements IExampleService {

    @Autowired
    ExampleRepositorio exampleRepositorio;

    public Example buscarValorPorId(BuscaExampleDTO buscaExampleDTO) {
        Optional<ExampleEntidade> exampleEntidadeOptional = exampleRepositorio.findById(buscaExampleDTO.getId());

        if(exampleEntidadeOptional.isEmpty()) throw new ResponseStatusException(HttpStatus.NOT_FOUND);

        ExampleEntidade exampleEntidade = exampleEntidadeOptional.get();

        return exampleEntidade.toModel();
    }
}
