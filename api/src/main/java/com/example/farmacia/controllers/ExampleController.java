package com.example.farmacia.controllers;

import com.example.farmacia.dtos.BuscaExampleRequestDTO;
import com.example.farmacia.entidades.Example;
import com.example.farmacia.services.IExampleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/example")
public class ExampleController {

    @Autowired
    IExampleService exampleService;

    @GetMapping()
    public ResponseEntity<Example> helloWorld(@ModelAttribute BuscaExampleRequestDTO buscaExampleDTO) {
        Example example = exampleService.buscarValorPorId(buscaExampleDTO);
        return ResponseEntity.ok(example);
    }

    @GetMapping("/hello")
    public String hello2() {
        return "Hello world 2";
    }

}
