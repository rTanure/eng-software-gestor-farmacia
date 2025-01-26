package com.example.farmacia.infraestrutura.services;

import com.example.farmacia.dominio.dtos.BuscaExampleDTO;
import com.example.farmacia.dominio.models.Example;

public interface IExampleService {
    Example buscarValorPorId(BuscaExampleDTO buscaExampleDTO);
}
