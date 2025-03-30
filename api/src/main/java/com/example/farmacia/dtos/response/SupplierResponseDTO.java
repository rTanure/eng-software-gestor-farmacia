package com.example.farmacia.dtos.response;

import com.example.farmacia.entidades.Supplier;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.util.UUID;

@Getter
@Setter
@Builder
public class SupplierResponseDTO {
    private UUID id;
    private String companyName; // nome da empresa
    private String cnpj; // CNPJ
    private String address; // endereço
    private String phone; // telefone
    private String email; // e-mail
    private String category; // categoria

    // Converte a entidade para DTO
    public static SupplierResponseDTO fromSupplier(Supplier supplier) {
        return SupplierResponseDTO.builder()
                .id(supplier.getId())
                .companyName(supplier.getCompanyName())
                .cnpj(supplier.getCnpj())
                .address(supplier.getAddress())
                .phone(supplier.getPhone())
                .email(supplier.getEmail())
                .category(supplier.getCategory())
                .build();
    }
}
