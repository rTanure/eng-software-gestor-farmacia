package com.example.farmacia.entidades;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;
import java.util.UUID;

@Entity
@Table(name = "stock")
@Setter
@Getter
public class Product {
    @Id
    @GeneratedValue(generator = "UUID", strategy = GenerationType.AUTO)
    private UUID id;

    private String name; // nome do produto
    private String code; // código de barras
    private String batch; // número do lote
    private String supplier; // fornecedor
    private LocalDate expirationDate; // data de validade
    private int receivedAmount; // quantidade recebida
    private double purchasePrice; // preço de compra
}
