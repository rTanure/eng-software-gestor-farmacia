package com.example.farmacia.repositories;

import com.example.farmacia.entidades.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.UUID;

public interface UserRepositorio extends JpaRepository<User, UUID> {
    UserDetails findByLogin(String login);

    User findUserByLogin(String login);
}
