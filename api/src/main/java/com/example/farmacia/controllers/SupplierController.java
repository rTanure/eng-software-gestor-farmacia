package com.example.farmacia.controllers;

import com.example.farmacia.dtos.request.SupplierCreatRequestDTO;
import com.example.farmacia.dtos.request.SupplierFilterRequestDTO;
import com.example.farmacia.dtos.response.SupplierResponseDTO;
import com.example.farmacia.entidades.Supplier;
import com.example.farmacia.services.SupplierService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/supplier")
@CrossOrigin(origins = "*")
@RequiredArgsConstructor
public class SupplierController {

    private final SupplierService supplierService;

    // Metodo para criar um fornecedor
    @PostMapping()
    public ResponseEntity<Void> createSupplier(@RequestBody Supplier supplier) {
        supplierService.createSupplier(supplier);
        return ResponseEntity.ok().build();
    }

    // Metodo para buscar um fornecedor por id, nome ou cnpj
    @GetMapping()
    public ResponseEntity<List<Supplier>> listSuppliers(@ModelAttribute SupplierFilterRequestDTO filter) {
        var suppliers = supplierService.findByFilter(filter); // Busca os fornecedores com base no filtro

        return ResponseEntity.ok(suppliers);
    }

    // Metodo de ediçao de fornecedor
    @PutMapping()
    public ResponseEntity<Void> updateSupplier(@RequestBody Supplier supplier) {
        supplierService.updateSupplier(supplier);
        return ResponseEntity.ok().build();
    }

    // Metodo para deletar um fornecedor
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteSupplier(@PathVariable UUID id) {
        supplierService.deleteSupplier(id);
        return ResponseEntity.ok().build();
    }
}
