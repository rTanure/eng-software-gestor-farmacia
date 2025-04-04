package com.example.farmacia.entidades;

import jakarta.persistence.*;
import lombok.*;
import org.springframework.http.HttpStatus;
import org.springframework.web.server.ResponseStatusException;

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
    public void removeAmount(Integer amount) {
        if(amount > receivedAmount) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Quantidade a ser removida é maior que a quantidade atual.");
        } else {
            receivedAmount -= amount;
        }
    }
}
