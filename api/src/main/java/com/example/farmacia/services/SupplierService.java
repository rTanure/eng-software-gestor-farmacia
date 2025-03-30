package com.example.farmacia.services;

import com.example.farmacia.dtos.request.SupplierRequestDTO;
import com.example.farmacia.dtos.response.ProductResponseDTO;
import com.example.farmacia.dtos.response.SupplierResponseDTO;
import com.example.farmacia.entidades.Product;
import com.example.farmacia.entidades.Supplier;
import com.example.farmacia.repositories.SupplierRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class SupplierService {

    private final SupplierRepository supplierRepository;

    // Metodo para criar um fornecedor
    public SupplierResponseDTO createSupplier(SupplierRequestDTO supplier) {
        Supplier newSupplier = Supplier.builder()
                .companyName(supplier.getCompanyName())
                .cnpj(supplier.getCnpj())
                .address(supplier.getAddress())
                .phone(supplier.getPhone())
                .email(supplier.getEmail())
                .build();
        Supplier savedSupplier = supplierRepository.save(newSupplier);
        return SupplierResponseDTO.fromSupplier(savedSupplier);
    }

    // Metodo para buscar um fornecedor por nome da companhia
    public Page<SupplierResponseDTO> findSupplierByCompanyName(String companyName, int page, int size, String sortBy, String order) {
        Sort.Direction direction = Sort.Direction.fromString(order);
        Pageable pageable = PageRequest.of(page, size, Sort.by(direction, sortBy));
        Page<Supplier> suppliers = supplierRepository.findByCompanyNameIgnoreCase(companyName, pageable);
        return suppliers.map(SupplierResponseDTO::fromSupplier);
    }
}
