package com.example.farmacia.controllers;

import com.example.farmacia.dtos.request.SupplierRequestDTO;
import com.example.farmacia.dtos.response.SupplierResponseDTO;
import com.example.farmacia.services.SupplierService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/supplier")
public class SupplierController {

    @Autowired
    private SupplierService supplierService;

    // Metodo para criar um fornecedor
    @PostMapping("/createSupplier")
    public ResponseEntity<SupplierResponseDTO> createSupplier(@RequestBody SupplierRequestDTO supplierRequestDTO) {
        SupplierResponseDTO supplierResponseDTO = supplierService.createSupplier(supplierRequestDTO);
        return ResponseEntity.status(HttpStatus.CREATED).body(supplierResponseDTO);
    }

    // Metodo para buscar um fornecedor por nome da companhia
    @GetMapping("/searchByCompanyName")
    public ResponseEntity<Page<SupplierResponseDTO>> searchSupplierByCompanyName(@RequestParam String companyName,
                                                                           @RequestParam(defaultValue = "0") int page,
                                                                           @RequestParam(defaultValue = "10") int size,
                                                                           @RequestParam(defaultValue = "name") String sortBy,
                                                                           @RequestParam(defaultValue = "asc") String order) {
        Page<SupplierResponseDTO> suppliers = supplierService.findSupplierByCompanyName(companyName, page, size, sortBy, order);
        return ResponseEntity.ok(suppliers);
    }
}
