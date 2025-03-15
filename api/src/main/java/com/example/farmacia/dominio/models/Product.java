package com.example.farmacia.dominio.models;

import lombok.*;

import java.time.LocalDate;
import java.util.UUID;

@AllArgsConstructor
@NoArgsConstructor
@Builder
@Getter
@Setter
public class Product {
    private UUID id;
    private String name;
    private String code;
    private String batch;
    private String supplier;
    private LocalDate expirationDate;
    private int receivedAmount;
    private double purchasePrice;
}
