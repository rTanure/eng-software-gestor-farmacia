package com.example.farmacia.dominio.models;

import lombok.AllArgsConstructor;

import java.util.UUID;

@AllArgsConstructor
public class User {
    private UUID id;
    private String login;
    private String password;
    private String role;
}
