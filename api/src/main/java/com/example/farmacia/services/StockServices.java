package com.example.farmacia.services;

import com.example.farmacia.dtos.ProductResponseDTO;
import com.example.farmacia.entidades.Product;
import com.example.farmacia.repositories.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class StockServices {

    @Autowired
    ProductRepository productRepository;

    public List<ProductResponseDTO> findProductsByName(String name) {
        List<Product> products = productRepository.findByNameContainingIgnoreCase(name);
        return products.stream()
                .map(ProductResponseDTO::fromProduct)
                .collect(Collectors.toList());
    }
}
