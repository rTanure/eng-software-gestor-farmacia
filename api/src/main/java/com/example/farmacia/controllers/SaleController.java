package com.example.farmacia.controllers;

import com.example.farmacia.dtos.request.SaleFilterRequestDTO;
import com.example.farmacia.entidades.Sale;
import com.example.farmacia.services.SaleService;
import org.springframework.beans.factory.annotation.Autowired;
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
    @PostMapping()
    public ResponseEntity<Void> saveSale(@RequestBody Sale sale) {
        saleService.saveSale(sale);
        return ResponseEntity.ok().build();
    }

    // Metodo para visualizar uma venda passando o id
    @GetMapping("/{id}")
    public ResponseEntity<Sale> getSaleById(@PathVariable UUID id) {
        Sale sale = saleService.getSaleById(id);
        return ResponseEntity.ok(sale);
    }

    @GetMapping()
    public ResponseEntity<List<Sale>> getSalesByFilter(@RequestBody SaleFilterRequestDTO saleFilterRequestDTO) {
        var sales = saleService.getByFilter( saleFilterRequestDTO);

        return ResponseEntity.ok(sales);
    }

    @PutMapping("/update")
    public ResponseEntity<Void> updateSale(@RequestBody Sale newSale) {
        saleService.updateSale(newSale);

        return ResponseEntity.ok().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteClient(@PathVariable UUID id) {
        saleService.deleteById(id);

        return ResponseEntity.ok().build();
    }

}
