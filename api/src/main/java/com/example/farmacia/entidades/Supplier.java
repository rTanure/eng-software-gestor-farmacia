package com.example.farmacia.entidades;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.UUID;

@Entity
@Table(name = "supplier")
@Setter
@Getter
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
