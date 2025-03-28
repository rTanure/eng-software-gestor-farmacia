package com.example.farmacia.dtos;

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
    private String sex;
    private LocalDateTime creationDate;
    private LocalDateTime lastUpdateDate;
}
