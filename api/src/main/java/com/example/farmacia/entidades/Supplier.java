package com.example.farmacia.entidades;

import jakarta.persistence.*;
import lombok.*;

import java.util.UUID;

@Entity
@Table(name = "suppliers")
@Setter
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Supplier {
    @Id
    @GeneratedValue(generator = "UUID", strategy = GenerationType.AUTO)
    private UUID id;

    private String companyName; // nome da empresa
    private String cnpj; // CNPJ
    private String address; // endereço
    private String phone; // telefone
    private String email; // e-mail
    private String category; // categoria
}
