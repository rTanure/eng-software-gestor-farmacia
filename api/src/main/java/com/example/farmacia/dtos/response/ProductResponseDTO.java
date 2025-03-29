package com.example.farmacia.dtos.response;

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
    private Integer receivedAmount;
    private Double purchasePrice;
    private UUID supplierId;

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
