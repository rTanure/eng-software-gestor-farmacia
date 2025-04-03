package com.example.farmacia.controllers;

import com.example.farmacia.dtos.request.SaleFilterRequestDTO;
import com.example.farmacia.dtos.request.SaleRequestDTO;
import com.example.farmacia.dtos.response.SaleResponseDTO;
import com.example.farmacia.entidades.Sale;
import com.example.farmacia.services.SaleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/sale")
public class SaleController {
    @Autowired
    private SaleService saleService;

    // Metodo para salvar uma venda
    @PostMapping("/")
    public ResponseEntity<SaleResponseDTO> saveSale(@RequestBody SaleRequestDTO saleRequestDTO) {
        SaleResponseDTO saved = saleService.saveSale(saleRequestDTO);
        return ResponseEntity.status(HttpStatus.CREATED).body(saved);
    }

    // Metodo para visualizar uma venda passando o id
    @GetMapping("/{id}")
    public ResponseEntity<Sale> getSaleById(@PathVariable UUID id) {
        Sale sale = saleService.getSaleById(id);
        return ResponseEntity.ok(sale);
    }

    @GetMapping()
    public ResponseEntity<List<Sale>> listSalesByFilter(SaleFilterRequestDTO saleFilterRequestDTO) {
        var sales = saleService.getByFilter( saleFilterRequestDTO);

        return ResponseEntity.ok(sales);
    }

    @PutMapping("/update")
    public ResponseEntity<SaleResponseDTO> updateSale(@RequestBody Sale newSale) {
        saleService.updateSale(newSale);

        return ResponseEntity.ok().build();
    }

}
