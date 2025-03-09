package com.example.farmacia.infraestrutura.services;

import com.example.farmacia.dominio.models.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.farmacia.infraestrutura.repositories.ProductRepository;

import java.util.List;

@Service
public class StockServices {

    @Autowired
    ProductRepository productRepository;

}
