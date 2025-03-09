package com.example.farmacia.infraestrutura.controllers;

import com.example.farmacia.infraestrutura.services.StockServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/stock")
public class StockController {

    @Autowired
    StockServices stockService;

}
