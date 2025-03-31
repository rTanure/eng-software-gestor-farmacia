package com.example.farmacia.controllers;

import com.example.farmacia.dtos.request.SupplierCreatRequestDTO;
import com.example.farmacia.dtos.request.SupplierFilterRequestDTO;
import com.example.farmacia.dtos.response.SupplierResponseDTO;
import com.example.farmacia.services.SupplierService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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

    // Metodo para buscar um fornecedor por id, nome ou cnpj
    @GetMapping()
    public ResponseEntity<List<SupplierResponseDTO>> listSuppliers(@ModelAttribute SupplierFilterRequestDTO filter) {
        var suppliers = supplierService.findByFilter(filter); // Busca os fornecedores com base no filtro
        // Mapeia os fornecedores para DTOs
        List<SupplierResponseDTO> supplierDTOs = suppliers.stream()
                .map(supplier -> {
                    SupplierResponseDTO dto = new SupplierResponseDTO();
                    dto.setId(supplier.getId());
                    dto.setName(supplier.getName());
                    dto.setCnpj(supplier.getCnpj());
                    return dto;
                })
                .toList();
        return ResponseEntity.ok(supplierDTOs);
    }
}
