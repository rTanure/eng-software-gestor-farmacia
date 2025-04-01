package com.example.farmacia.dtos.request;

import com.example.farmacia.entidades.Supplier;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class SupplierCreatRequestDTO {
    private String companyName; // nome da empresa
    private String cnpj; // CNPJ
    private String address; // endereço
    private String phone; // telefone
    private String email; // e-mail
    private String category; // categoria

    // Converte o DTO para a entidade Supplier
    public Supplier toModel() {
        return Supplier.builder()
                .companyName(this.companyName)
                .cnpj(this.cnpj)
                .address(this.address)
                .phone(this.phone)
                .email(this.email)
                .category(this.category)
                .build();
    }
}
