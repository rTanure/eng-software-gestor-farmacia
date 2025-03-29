package com.example.farmacia.dtos.response;

import com.example.farmacia.enums.EnumGender;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.UUID;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class ClientResponseDTO {
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
