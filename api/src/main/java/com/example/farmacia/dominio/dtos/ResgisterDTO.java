package com.example.farmacia.dominio.dtos;

import com.example.farmacia.dominio.enums.EnumUserRoles;

public record ResgisterDTO(String login, String password, EnumUserRoles role) {
}
