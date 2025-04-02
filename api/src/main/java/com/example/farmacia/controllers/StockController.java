package com.example.farmacia.controllers;

import com.example.farmacia.dtos.request.ProductCreatRequestDTO;
import com.example.farmacia.dtos.request.ProductFilterRequestDTO;
import com.example.farmacia.dtos.response.ProductResponseDTO;
import com.example.farmacia.entidades.Product;
import com.example.farmacia.services.StockService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/stock")
@CrossOrigin(origins = "*")
@RequiredArgsConstructor
public class StockController {

    private StockService stockService;

    // Metodo de criação de estoque de produto
    @PostMapping()
    public ResponseEntity<Void> createProduct(@RequestBody ProductCreatRequestDTO product) {
        stockService.createProduct(product);
        return ResponseEntity.ok().build();
    }

    // Metodo de busca de estoque de produtos por id, nome e codigo de barras
    @GetMapping()
    public ResponseEntity<List<Product>> searchProduct(@ModelAttribute ProductFilterRequestDTO product) {
        var products = stockService.findByFilter(product);
        return ResponseEntity.ok(products);
    }

    // Metodo de ediçao de produto por id
    @PutMapping("/{id}")
    public ResponseEntity<ProductResponseDTO> updateProduct(@PathVariable UUID id, @RequestBody ProductCreatRequestDTO product) {
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
