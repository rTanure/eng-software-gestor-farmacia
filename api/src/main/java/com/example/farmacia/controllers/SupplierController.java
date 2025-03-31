package com.example.farmacia.controllers;

import com.example.farmacia.dtos.request.SupplierCreatRequestDTO;
import com.example.farmacia.dtos.response.SupplierResponseDTO;
import com.example.farmacia.services.SupplierService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/supplier")
@CrossOrigin(origins = "*")
@RequiredArgsConstructor
public class SupplierController {

    private final SupplierService supplierService;

    // Metodo para criar um fornecedor
    @PostMapping()
    public ResponseEntity<Void> createSupplier(@RequestBody SupplierCreatRequestDTO supplierCreatRequestDTO) {
        supplierService.createSupplier(supplierCreatRequestDTO);
        return ResponseEntity.ok().build();
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
