package com.example.farmacia.dtos.request;

import com.example.farmacia.enums.EnumPaymenthMethod;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Getter
@Setter
public class SaleRequestDTO {
    private String nameClient; // nome do cliente
    private String nameProduct; // nome do produto
    private String codeProduct; // código de barras
    private EnumPaymenthMethod paymenthMethod; // metodo de pagamento
    private LocalDate paymenthDate;
    private Integer amount; // quantidade vendida
}
