package com.example.farmacia.dtos.request;

import com.example.farmacia.entidades.Client;
import com.example.farmacia.enums.EnumGender;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Getter
@Setter
public class ClientCreatRequestDTO {
    private String cpf;
    private String name;
    private String email;
    private String phoneNumber;
    private LocalDate dateOfBirth;
    private EnumGender gender;

    public Client toModel(){
        return Client.builder()
                .name(this.name)
                .email(this.email)
                .phoneNumber(this.phoneNumber)
                .dateOfBirth(this.dateOfBirth)
                .cpf(this.cpf)
                .build();
    }
}
