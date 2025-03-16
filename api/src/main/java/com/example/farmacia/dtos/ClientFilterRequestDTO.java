package com.example.farmacia.dtos;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ClientFilterRequestDTO {
    private String name;
    private String cpf;
}
