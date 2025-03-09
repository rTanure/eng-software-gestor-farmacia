package com.example.farmacia.infraestrutura.repositories;

import com.example.farmacia.infraestrutura.entidades.ProductEntidade;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface ProductRepository extends JpaRepository<ProductEntidade, UUID> {
}
