package com.example.farmacia.services;

import com.example.farmacia.dtos.ProductResponseDTO;
import com.example.farmacia.entidades.Product;
import com.example.farmacia.repositories.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.UUID;


@Service
public class StockServices {

    @Autowired
    ProductRepository productRepository;

    // Metodo de criação de estoque de produto
    public ProductResponseDTO createProduct(ProductResponseDTO product) {
        // Converte o DTO para entidade
        Product newProduct = product.toProduct();
        // Salva a entidade no banco de dados
        Product savedProduct = productRepository.save(newProduct);
        return ProductResponseDTO.fromProduct(savedProduct); // Converte a entidade para DTO e retorna
    }

    public Page<ProductResponseDTO> findProductsByName(String name, int page, int size, String sortBy, String order) {
        Sort.Direction direction = Sort.Direction.fromString(order);
        Pageable pageable = PageRequest.of(page, size, Sort.by(direction, sortBy));
        Page<Product> products = productRepository.findByNameContainingIgnoreCase(name, pageable);
        return products.map(ProductResponseDTO::fromProduct);
    }

    public void deleteProductById(UUID id) {
        productRepository.findById(id)
                .ifPresentOrElse(product -> productRepository.delete(product), () -> {;
                    throw new RuntimeException("Produto não encontrado");
                });
    }
}
