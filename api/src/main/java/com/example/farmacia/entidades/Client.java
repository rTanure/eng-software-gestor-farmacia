package com.example.farmacia.entidades;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class Client {
    private String name;
    private int cpf;
    private String email;
    private String phoneNumber;
    }

