package com.example.farmacia.dtos;

import com.example.farmacia.entidades.Client;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
public class ClientCreatRequestDTO {
    private String cpf;
    private String name;
    private String email;
    private String phoneNumber;
    private Date dateOfBirth;
    private String sex;

    public Client toModel(){
        return Client.builder()
                .name(this.name)
                .email(this.email)
                .phoneNumber(this.phoneNumber)
                .dateOfBirth(this.dateOfBirth)
                .cpf(this.cpf)
                .sex(this.sex)
                .build();
    }
}
