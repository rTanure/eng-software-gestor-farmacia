package com.example.farmacia.dtos.response;

import com.example.farmacia.entidades.Sale;
import com.example.farmacia.enums.EnumPaymenthMethod;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;
import java.util.UUID;

@Getter
@Setter
@Builder
public class SaleResponseDTO {
    private UUID id;

    private UUID idClient;
    private UUID idPrescription;
    private UUID idProduct;
    private LocalDate date;
    private Integer amount;
    private Double salePrice;

    // Converte a entidade para DTO
    public static SaleResponseDTO fromSale(Sale sale) {
        return SaleResponseDTO.builder()
                .id(sale.getId())
                .idClient(sale.getIdClient())
                .idPrescription(sale.getIdPrescription())
                .idProduct(sale.getIdProduct())
                .date(sale.getDate())
                .amount(sale.getAmount())
                .salePrice(sale.getSalePrice())
                .build();
    }
}
