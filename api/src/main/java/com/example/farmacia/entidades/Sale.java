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

    @Column(name = "client_id")
    private UUID clientId;
    @Column(name = "prescription_id")
    private UUID prescriptionId;
    @Column(name = "product_id")
    private UUID productId;
    private LocalDate date;
    private Integer amount;
    private Double salePrice;
}
