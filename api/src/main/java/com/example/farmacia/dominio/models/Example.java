package com.example.farmacia.dominio.models;

import com.example.farmacia.dominio.enums.EnumExample;
import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Builder
@Getter
@Setter
public class Example {
    private Long id;
    private String valor;
    private EnumExample tipo;
}
