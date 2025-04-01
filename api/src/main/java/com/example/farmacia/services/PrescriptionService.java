package com.example.farmacia.services;

import com.example.farmacia.entidades.Prescription;
import com.example.farmacia.repositories.PrescriptionRepository;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class PrescriptionService {
    private final PrescriptionRepository prescriptionRepository;

    public PrescriptionService(PrescriptionRepository prescriptionRepository) {
        this.prescriptionRepository = prescriptionRepository;
    }

    public void createPrescription(Prescription prescription) {
        prescription.setId(null);
        prescriptionRepository.save(prescription);
    }

    public List<Prescription> getAllPrescriptions() {
        return prescriptionRepository.findAll();
    }

    public Prescription getPrescriptionById(UUID id) {
        Optional<Prescription> prescription = prescriptionRepository.findById(id);

        if(prescription.isEmpty()) throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Receita não encontrada");

        return prescription.get();
    }

    public void updatePrescription(Prescription prescription) {
        Optional<Prescription> prescriptionOptional = prescriptionRepository.findById(prescription.getId());
        if(prescriptionOptional.isEmpty()) throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Receita não encontrada");
        prescriptionRepository.save(prescription);
    }

    public void deletePrescription(UUID id) {
        Optional<Prescription> prescriptionOptional = prescriptionRepository.findById(id);
        if(prescriptionOptional.isEmpty()) throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Receita não encontrada");
        prescriptionRepository.deleteById(id);
    }
}
