package com.example.farmacia.dtos.request;

import com.example.farmacia.enums.EnumPaymenthMethod;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;
import java.util.UUID;

@Getter
@Setter
public class SaleRequestDTO {
    private UUID idClient; // nome do cliente
    private UUID idPrescription; // nome do produto
    private UUID idProduct; // código de barras
    private EnumPaymenthMethod paymenthMethod; // metodo de pagamento
    private LocalDate paymenthDate;
    private Integer amount; // quantidade vendida
}
