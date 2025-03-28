package com.example.farmacia.dtos;

import java.time.Instant;
import java.util.Date;
import java.util.UUID;

public class ClientResponseFindDTO {
    private UUID id;
    private String name;
    private String cpf;
    private String email;
    private String phoneNumber;
    private Date dateOfBirth;
    private String sex;
    private Instant creationDate;
    private Instant lastUpdateDate;
}
