package com.example.farmacia.dtos.request;

import com.example.farmacia.enums.EnumUserRoles;

public record ResgisterRequestDTO(String login, String password, EnumUserRoles role) {
}
