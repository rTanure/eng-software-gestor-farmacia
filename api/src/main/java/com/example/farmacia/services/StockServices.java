package com.example.farmacia.services;

import com.example.farmacia.repositories.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class StockServices {

    @Autowired
    ProductRepository productRepository;

}
