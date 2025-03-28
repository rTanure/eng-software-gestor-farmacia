package com.example.farmacia.entidades;

import com.example.farmacia.enums.EnumGender;
import jakarta.persistence.*;
import lombok.*;

import java.time.Instant;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Date;
import java.util.UUID;

@Entity
@Table(name = "clients")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Client {
    @Id
    @GeneratedValue(generator = "UUID", strategy = GenerationType.AUTO)
    private UUID id;

    private String name;
    private String cpf;
    private String email;
    private String phoneNumber;
    private LocalDate dateOfBirth;
    private EnumGender gender;
    private LocalDateTime creationDate;
    private LocalDateTime updateDate;


}

