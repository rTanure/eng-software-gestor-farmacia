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

    private UUID idClient;
    private UUID idPrescription;
    private UUID idProduct;
    private LocalDate date;
    private Integer amount;
    private Double salePrice;
}
