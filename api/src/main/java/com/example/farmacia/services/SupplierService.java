package com.example.farmacia.services;

import com.example.farmacia.dtos.request.SupplierCreatRequestDTO;
import com.example.farmacia.dtos.request.SupplierFilterRequestDTO;
import com.example.farmacia.entidades.Supplier;
import com.example.farmacia.repositories.SupplierRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.BeanUtils;
import org.springframework.data.domain.*;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class SupplierService {

    private final SupplierRepository supplierRepository;

    // Metodo para criar um fornecedor
    public void createSupplier(Supplier supplier) {
        // Verifica se o CNPJ já está cadastrado
        if (supplierRepository.findByCnpj(supplier.getCnpj()) != null) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Fornecedor já cadastrado");
        }

        // Salva o fornecedor no banco de dados
        supplierRepository.save(supplier);
    }

    // Metodo para buscar um fornecedor
    public List<Supplier> findByFilter(SupplierFilterRequestDTO supplierFilterRequestDTO) {
        Supplier s = new Supplier();

        // Copia as propriedades do DTO para a entidade
        BeanUtils.copyProperties(s, supplierFilterRequestDTO);

        // Cria um exemplo para a busca
        ExampleMatcher matcher = ExampleMatcher.matching()
                .withIgnoreCase()
                .withIgnoreNullValues()
                .withStringMatcher(ExampleMatcher.StringMatcher.CONTAINING);

        Example<Supplier> example = Example.of(s, matcher);

        // Retorna todos os fornecedores que correspondem ao exemplo
        return supplierRepository.findAll(example);
    }

    // Metodo para recuperar fornecedor por id
    public Supplier getSupplier(UUID id) {
        return supplierRepository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Fornecedor não encontrado"));
    }

    // Metodo de ediçao de fornecedor
    public void updateSupplier(Supplier supplier) {
        var supplierExists = supplierRepository.existsById(supplier.getId());
        if (!supplierExists) throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Fornecedor não encontrado");
        supplierRepository.save(supplier);
    }

    // Metodo para deletar fornecedor
    public void deleteSupplier(UUID id) {
        var supplierExists = supplierRepository.existsById(id);
        if (supplierExists) {
            supplierRepository.deleteById(id);
        } else {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Fornecedor não encontrado");
        }
    }
}
