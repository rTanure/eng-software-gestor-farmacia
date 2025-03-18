package com.example.farmacia.entidades;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

import java.time.Instant;
import java.util.Date;
import java.util.UUID;

@Entity
@Getter
@Setter
@AllArgsConstructor
public class Client {
    @Id
    @GeneratedValue(generator = "UUID", strategy = GenerationType.AUTO)
    private UUID id;

    private UUID prescriptionId;
    private String name;
    private String cpf;
    private String email;
    private String phoneNumber;
    private Date dateOfBirth;
    private String sex;
    private Instant creationDate;
    private Instant updateDate;

    public Client(String name,
                  String cpf,
                  String email,
                  String phoneNumber,
                  Date dateOfBirth,
                  String sex,
                  Instant creationDate,
                  Instant updateDate) {
        this.name = name;
        this.cpf = cpf;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.dateOfBirth = dateOfBirth;
        this.sex = sex;
        this.creationDate = creationDate;
        this.updateDate = updateDate;
    }
}

