package com.example.farmacia.infraestrutura.controllers;

import com.example.farmacia.dominio.dtos.BuscaExampleDTO;
import com.example.farmacia.dominio.models.Example;
import com.example.farmacia.infraestrutura.services.IExampleService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/example")
public class ExampleController {
    IExampleService exampleService;

    @GetMapping()
    public ResponseEntity<Example> helloWorld(@ModelAttribute BuscaExampleDTO buscaExampleDTO) {
        Example exemplo = exampleService.buscarValorPorId(buscaExampleDTO);
        return ResponseEntity.ok(exemplo);
    }
}
