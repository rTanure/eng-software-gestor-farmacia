package com.example.farmacia.infraestrutura.repositories;

import com.example.farmacia.infraestrutura.entidades.UserEntidade;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.UUID;

public interface UserRepositorio extends JpaRepository<UserEntidade, UUID> {
    UserDetails findByLogin(String login);

    UserEntidade findUserEntidadeByLogin(String login);
}
