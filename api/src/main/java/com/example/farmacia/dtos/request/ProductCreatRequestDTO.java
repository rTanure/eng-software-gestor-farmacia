package com.example.farmacia.dtos.request;

import com.example.farmacia.entidades.Product;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;
import java.util.UUID;

@Getter
@Setter
public class ProductCreatRequestDTO {
    private String name; // nome do produto
    private String code; // código de barras
    private String batch; // número do lote
    private UUID supplierId; // id do fornecedor
    private LocalDate expirationDate; // data de validade
    private Integer receivedAmount; // quantidade recebida inicialmente
    private Double purchasePrice; // preço de compra

    public Product toModel(){
        return Product.builder()
                .name(this.name)
                .code(this.code)
                .batch(this.batch)
                .supplierId(this.supplierId)
                .expirationDate(this.expirationDate)
                .receivedAmount(this.receivedAmount)
                .purchasePrice(this.purchasePrice)
                .build();
    }
}
