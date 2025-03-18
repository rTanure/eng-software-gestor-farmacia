package com.example.farmacia.dtos;

import lombok.Getter;
import lombok.Setter;

import java.util.UUID;

@Getter
@Setter
public class ClientFilterRequestDTO {
    private UUID id;
    private String name;
    private String cpf;
}
