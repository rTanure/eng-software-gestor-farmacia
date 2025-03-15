package com.example.farmacia.services;

import com.example.farmacia.dtos.BuscaExampleRequestDTO;
import com.example.farmacia.entidades.Example;

public interface IExampleService {
    Example buscarValorPorId(BuscaExampleRequestDTO buscaExampleDTO);
}
