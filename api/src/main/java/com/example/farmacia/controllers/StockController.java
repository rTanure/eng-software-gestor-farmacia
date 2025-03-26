package com.example.farmacia.controllers;

import com.example.farmacia.dtos.ProductRequestDTO;
import com.example.farmacia.dtos.ProductResponseDTO;
import com.example.farmacia.services.StockService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RestController
@RequestMapping("/stock")
public class StockController {

    @Autowired
    private StockService stockService;

    // Metodo de criação de estoque de produto
    @PostMapping("/createProduct")
    public ResponseEntity<ProductResponseDTO> createProduct(@RequestBody ProductRequestDTO product) {
        ProductResponseDTO productResponseDTO = stockService.createProduct(product);
        return ResponseEntity.status(HttpStatus.CREATED).body(productResponseDTO);
    }

    // Metodo de busca de estoque de produtos por nome
    @GetMapping("/searchByName")
    public ResponseEntity<Page<ProductResponseDTO>> searchProduct(@RequestParam String name,
                                                                  @RequestParam(defaultValue = "0") int page,
                                                                  @RequestParam(defaultValue = "10") int size,
                                                                  @RequestParam(defaultValue = "name") String sortBy,
                                                                  @RequestParam(defaultValue = "asc") String order) {
        Page<ProductResponseDTO> products = stockService.findProductsByName(name, page, size, sortBy, order);
        return ResponseEntity.ok(products);
    }

    // Metodo de ediçao de produto por id
    @PutMapping("/{id}")
    public ResponseEntity<ProductResponseDTO> updateProduct(@PathVariable UUID id, @RequestBody ProductResponseDTO product) {
        ProductResponseDTO productResponseDTO = stockService.updateProduct(id, product);
        return ResponseEntity.ok(productResponseDTO);
    }

    // Metodo de remoção de produto por id
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteProduct(@PathVariable UUID id) {
        stockService.deleteProductById(id);
        return ResponseEntity.noContent().build();
    }
}
