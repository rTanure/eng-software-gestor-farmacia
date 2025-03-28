package com.example.farmacia.dtos;

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
    private String nameClient; // nome do cliente
    private String nameProduct; // nome do produto
    private String codeProduct; // código de barras
    private EnumPaymenthMethod paymenthMethod; // metodo de pagamento
    private LocalDate paymenthDate;
    private int amount; // quantidade vendida

    // Converte a entidade para DTO
    public static SaleResponseDTO fromSale(Sale sale) {
        return SaleResponseDTO.builder()
                .id(sale.getId())
                .nameClient(sale.getNameClient())
                .nameProduct(sale.getNameProduct())
                .codeProduct(sale.getCodeProduct())
                .paymenthMethod(sale.getPaymenthMethod())
                .paymenthDate(sale.getPaymenthDate())
                .amount(sale.getAmount())
                .build();
    }
}
