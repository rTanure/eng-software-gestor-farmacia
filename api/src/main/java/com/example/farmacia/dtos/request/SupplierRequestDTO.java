package com.example.farmacia.dtos.request;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class SupplierRequestDTO {
    private String companyName; // nome da empresa
    private String cnpj; // CNPJ
    private String address; // endereço
    private String phone; // telefone
    private String email; // e-mail
    private String category; // categoria
}
