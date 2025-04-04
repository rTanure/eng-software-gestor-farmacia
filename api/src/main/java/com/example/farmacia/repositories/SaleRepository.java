package com.example.farmacia.repositories;

import com.example.farmacia.entidades.Client;
import com.example.farmacia.entidades.Sale;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.QueryByExampleExecutor;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface SaleRepository extends JpaRepository<Sale, UUID>, QueryByExampleExecutor<Sale> {
}
