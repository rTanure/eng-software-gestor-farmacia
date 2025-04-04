package com.example.farmacia.dtos.request;

import com.example.farmacia.entidades.Sale;
import com.example.farmacia.enums.EnumPaymenthMethod;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;
import java.util.UUID;

@Getter
@Setter
public class SaleRequestDTO {
    private UUID clientId;
    private UUID productId;
    private String codebar;
    private EnumPaymenthMethod paymentMethod;
    private LocalDate paymentDate;
    private Integer amount;

    public Sale toModel() {
        return Sale.builder()
                .clientId(this.clientId)
                .productId(this.productId)
                .codeBar(this.codebar)
                .paymentMethod(this.paymentMethod)
                .paymentDate(this.paymentDate)
                .amount(this.amount)
                .build();
    }
}
