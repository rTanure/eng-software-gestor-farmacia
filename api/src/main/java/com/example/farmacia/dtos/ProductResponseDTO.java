package com.example.farmacia.dtos;

import com.example.farmacia.entidades.Product;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;
import java.util.UUID;

@Getter
@Setter
@Builder
public class ProductResponseDTO {
    private UUID id;
    private String name;
    private String code;
    private String batch;
    private LocalDate expirationDate;
    private int receivedAmount;
    private double purchasePrice;
    private UUID supplierId;

    // Converte o DTO para entidade
    public Product toProduct() {
        return Product.builder()
                .id(id)
                .name(name)
                .code(code)
                .batch(batch)
                .expirationDate(expirationDate)
                .receivedAmount(receivedAmount)
                .purchasePrice(purchasePrice)
                .supplierId(supplierId)
                .build();
    }

    // Converte a entidade para DTO
    public static ProductResponseDTO fromProduct(Product product) {
        return ProductResponseDTO.builder()
                .id(product.getId())
                .name(product.getName())
                .code(product.getCode())
                .batch(product.getBatch())
                .expirationDate(product.getExpirationDate())
                .receivedAmount(product.getReceivedAmount())
                .purchasePrice(product.getPurchasePrice())
                .supplierId(product.getSupplierId())
                .build();
    }
}
