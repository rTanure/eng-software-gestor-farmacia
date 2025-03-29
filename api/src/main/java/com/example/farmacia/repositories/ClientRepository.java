package com.example.farmacia.repositories;

import com.example.farmacia.entidades.Client;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.data.repository.query.QueryByExampleExecutor;

import java.util.UUID;

@Repository
public interface ClientRepository extends JpaRepository<Client, UUID>, QueryByExampleExecutor<Client> {
    Client findByCpf(String cpf);
    Client findByName(String name);
}
