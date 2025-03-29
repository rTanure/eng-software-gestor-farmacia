package com.example.farmacia.dtos.request;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;
import java.util.UUID;

@Getter
@Setter
public class ProductRequestDTO {
    private String name; // nome do produto
    private String code; // código de barras
    private String batch; // número do lote
    private UUID supplierId; // id do fornecedor
    private LocalDate expirationDate; // data de validade
    private Integer receivedAmount; // quantidade recebida inicialmente
    private Double purchasePrice; // preço de compra
}
