package com.example.farmacia.dtos.request;

import lombok.Getter;
import lombok.Setter;

import java.util.UUID;

@Getter
@Setter
public class SupplierFilterRequestDTO {
    private UUID id;
    private String companyName;
    private String cnpj;
}
