package com.example.farmacia.dtos;

import com.example.farmacia.entidades.Client;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CreateClientRequestDTO {
    private String cpf;
    private String name;
    private String email;
    private String phoneNumber;

    public Client toModel() {
        return Client.builder()
                .cpf(this.cpf)
                .name(this.name)
                .email(this.email)
                .phoneNumber(this.phoneNumber)
                .build();
    }
}
