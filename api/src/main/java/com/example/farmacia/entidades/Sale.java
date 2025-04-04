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

    private UUID clientId;
    private UUID productId;
    private String codeBar;
    private EnumPaymenthMethod paymentMethod;
    private LocalDate paymentDate;
    private Integer amount;
}
