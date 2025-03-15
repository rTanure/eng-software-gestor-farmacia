package com.example.farmacia.repositories;

import com.example.farmacia.entidades.Example;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ExampleRepositorio extends JpaRepository<Example, Long> {
}
