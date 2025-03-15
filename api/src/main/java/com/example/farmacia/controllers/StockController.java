package com.example.farmacia.controllers;

import com.example.farmacia.dtos.ProductResponseDTO;
import com.example.farmacia.services.StockServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

@RestController
@RequestMapping("/stock")
public class StockController {

    @Autowired
    private StockServices stockService;

    @GetMapping("/search")
    public ResponseEntity<List<ProductResponseDTO>> searchProduct(@RequestParam String name) {
        List<ProductResponseDTO> products = stockService.findProductsByName(name);
        return ResponseEntity.ok(products);
    }

}
