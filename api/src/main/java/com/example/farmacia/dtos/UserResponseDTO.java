package com.example.farmacia.dtos;

import com.example.farmacia.enums.EnumUserRoles;
import com.example.farmacia.entidades.User;
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

    public static UserResponseDTO fromUser(User user) {
        return UserResponseDTO.builder()
                .id(user.getId())
                .login(user.getLogin())
                .role(user.getRole())
                .build();
    }
}
