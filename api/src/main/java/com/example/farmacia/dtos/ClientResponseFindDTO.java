package com.example.farmacia.dtos;

import com.example.farmacia.enums.EnumGender;

import java.time.Instant;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Date;
import java.util.UUID;

public class ClientResponseFindDTO {
    private UUID id;
    private String name;
    private String cpf;
    private String email;
    private String phoneNumber;
    private LocalDate dateOfBirth;
    private EnumGender gender;
    private LocalDateTime creationDate;
    private LocalDateTime lastUpdateDate;
}
