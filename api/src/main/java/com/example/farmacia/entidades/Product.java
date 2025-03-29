package com.example.farmacia.entidades;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;
import java.util.UUID;

@Entity
@Table(name = "stock")
@Setter
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Product {
    @Id
    @GeneratedValue(generator = "UUID", strategy = GenerationType.AUTO)
    private UUID id;

    private String name; // nome do produto
    private String code; // código de barras
    private String batch; // número do lote
    private UUID supplierId; // id do fornecedor
    private LocalDate expirationDate; // data de validade
    private Integer receivedAmount; // quantidade recebida
    private Double purchasePrice; // preço de compra

    // Controle de quantidade em estoque
    // Metodos para adicionar e remover quantidade do estoque
    public void addAmount(int amount) {
        if(amount > receivedAmount) {
            throw new RuntimeException("Quantidade a ser adicionada é maior que a quantidade recebida.");
        } else {
            receivedAmount += amount;
        }
    }
    public void removeAmount(int amount) {
        if(amount > receivedAmount) {
            throw new RuntimeException("Quantidade a ser removida é maior que a quantidade atual.");
        } else {
            receivedAmount -= amount;
        }
    }
}
