package com.example.farmacia.repositories;

import com.example.farmacia.entidades.Client;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface ClientRepository extends JpaRepository<Client, UUID> {
    Client findByCpf(String cpf);
}
