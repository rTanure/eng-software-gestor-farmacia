package com.example.farmacia.controllers;

import com.example.farmacia.entidades.Prescription;
import com.example.farmacia.services.PrescriptionService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/prescription")
@CrossOrigin(origins = "*")
@RequiredArgsConstructor
public class PrescriptionController {
    private final PrescriptionService prescriptionService;

    @PostMapping
    public ResponseEntity<Void> createPrescription(@RequestBody Prescription prescription) {
        prescriptionService.createPrescription(prescription);
        return ResponseEntity.ok().build();
    }

    @GetMapping
    public ResponseEntity<List<Prescription>> getAllPrescriptions() {
        return ResponseEntity.ok(prescriptionService.getAllPrescriptions());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Prescription> getPrescriptionById(@PathVariable UUID id) {
        return ResponseEntity.ok(prescriptionService.getPrescriptionById(id));
    }

    @PutMapping
    public ResponseEntity<Void> updatePrescription(@RequestBody Prescription prescription) {
        prescriptionService.updatePrescription(prescription);
        return ResponseEntity.ok().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletePrescription(@PathVariable UUID id) {
        prescriptionService.deletePrescription(id);
        return ResponseEntity.ok().build();
    }
}
