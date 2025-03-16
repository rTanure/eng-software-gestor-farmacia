package com.example.farmacia.entidades;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@Builder
public class Client {
    private String name;
    private String cpf;
    private String email;
    private String phoneNumber;
    }

