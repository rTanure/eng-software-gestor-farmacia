package com.example.farmacia.repositories;

import com.example.farmacia.entidades.Prescription;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

@Repository
public interface PrescriptionRepository extends JpaRepository<Prescription, UUID>{
    List<Prescription> findAllByClientId(UUID clientIds);

    void deleteAllByClientId(UUID clientId);
}
