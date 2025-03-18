package com.example.farmacia.dtos;

import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
public class ClientUpdateDTO {
    private String name;
    private String phoneNumber;
    private Date dateOfBirth;
    private String sex;
}
