package com.example.farmacia.controllers;

import com.example.farmacia.dtos.ProductResponseDTO;
import com.example.farmacia.services.StockServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/stock")
public class StockController {

    @Autowired
    private StockServices stockService;

    @GetMapping("/search")
    public ResponseEntity<Page<ProductResponseDTO>> searchProduct(@RequestParam String name,
                                                                  @RequestParam(defaultValue = "0") int page,
                                                                  @RequestParam(defaultValue = "10") int size,
                                                                  @RequestParam(defaultValue = "name") String sortBy,
                                                                  @RequestParam(defaultValue = "asc") String order) {
        Page<ProductResponseDTO> products = stockService.findProductsByName(name, page, size, sortBy, order);
        return ResponseEntity.ok(products);
    }

}
