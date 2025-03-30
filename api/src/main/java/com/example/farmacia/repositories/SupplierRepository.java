package com.example.farmacia.repositories;

import com.example.farmacia.entidades.Supplier;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface SupplierRepository extends JpaRepository<Supplier, UUID> {
    @Query("SELECT s FROM Supplier s WHERE LOWER(s.companyName) LIKE LOWER(CONCAT('%', :companyName, '%'))")
    Page<Supplier> findByCompanyNameIgnoreCase(@Param("companyName") String companyName, Pageable pageable);
}
