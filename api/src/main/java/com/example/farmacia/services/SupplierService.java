package com.example.farmacia.services;

import com.example.farmacia.dtos.request.SupplierCreatRequestDTO;
import com.example.farmacia.dtos.response.SupplierResponseDTO;
import com.example.farmacia.entidades.Supplier;
import com.example.farmacia.repositories.SupplierRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.time.LocalDateTime;

@Service
@RequiredArgsConstructor
public class SupplierService {

    private final SupplierRepository supplierRepository;

    // Metodo para criar um fornecedor
    public void createSupplier(SupplierCreatRequestDTO supplier) {
        var entity = supplier.toModel(); // Converte o DTO para a entidade

        // Verifica se o CNPJ já está cadastrado
        if (supplierRepository.findByCnpj(supplier.getCnpj()) != null) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Fornecedor já cadastrado");
        }

        // Salva o fornecedor no banco de dados
        supplierRepository.save(entity);
    }

    // Metodo para buscar um fornecedor por nome da companhia
    public Page<SupplierResponseDTO> findSupplierByCompanyName(String companyName, int page, int size, String sortBy, String order) {
        Sort.Direction direction = Sort.Direction.fromString(order);
        Pageable pageable = PageRequest.of(page, size, Sort.by(direction, sortBy));
        Page<Supplier> suppliers = supplierRepository.findByCompanyNameIgnoreCase(companyName, pageable);
        return suppliers.map(SupplierResponseDTO::fromSupplier);
    }
}
