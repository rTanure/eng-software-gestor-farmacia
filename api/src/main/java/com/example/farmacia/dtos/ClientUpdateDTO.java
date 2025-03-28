package com.example.farmacia.dtos;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Getter
@Setter
public class ClientUpdateDTO {
    private String name;
    private String phoneNumber;
    private LocalDate dateOfBirth;
    private String sex;
}
