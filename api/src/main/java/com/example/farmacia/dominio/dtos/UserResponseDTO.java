package com.example.farmacia.dominio.dtos;

import com.example.farmacia.dominio.enums.EnumUserRoles;
import com.example.farmacia.dominio.models.User;
import com.example.farmacia.infraestrutura.entidades.UserEntidade;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.util.UUID;

@Getter
@Setter
@Builder
public class UserResponseDTO {
    private UUID id;
    private String login;
    private EnumUserRoles role;

    public static UserResponseDTO fromUserEntidade(UserEntidade userEntidade) {
        return UserResponseDTO.builder()
                .id(userEntidade.getId())
                .login(userEntidade.getLogin())
                .role(userEntidade.getRole())
                .build();
    }
}
