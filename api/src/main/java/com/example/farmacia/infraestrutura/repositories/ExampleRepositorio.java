package com.example.farmacia.infraestrutura.repositories;

import com.example.farmacia.infraestrutura.entidades.ExampleEntidade;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ExampleRepositorio extends JpaRepository<ExampleEntidade, Long> {
}
