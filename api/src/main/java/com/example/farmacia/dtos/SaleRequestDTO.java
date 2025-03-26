package com.example.farmacia.dtos;

import com.example.farmacia.enums.EnumPaymenthMethod;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Getter
@Setter
@Builder
public class SaleRequestDTO {
    private String nameClient; // nome do cliente
    private String nameProduct; // nome do produto
    private String codeProduct; // código de barras
    private EnumPaymenthMethod paymenthMethod; // metodo de pagamento
    private LocalDate paymenthDate;
    private int amount; // quantidade vendida
}
