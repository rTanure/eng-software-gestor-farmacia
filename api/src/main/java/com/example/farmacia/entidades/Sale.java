package com.example.farmacia.entidades;

import com.example.farmacia.enums.EnumPaymenthMethod;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;
import java.util.UUID;

@Entity
@Table(name = "sales")
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Sale {
    @Id
    @GeneratedValue(generator = "UUID", strategy = GenerationType.AUTO)
    private UUID id;

    private String nameClient; // nome do cliente
    private String nameProduct; // nome do produto
    private String codeProduct; // código de barras
    @Enumerated(EnumType.STRING)
    private EnumPaymenthMethod paymenthMethod; // metodo de pagamento
    private LocalDate paymenthDate;
    private Integer amount; // quantidade vendida
    private Double salePrice; // preço de venda
}
