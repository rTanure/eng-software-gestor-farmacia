package com.example.farmacia.dominio.enums;

import com.fasterxml.jackson.annotation.JsonValue;
import lombok.AllArgsConstructor;

import java.util.Map;

@AllArgsConstructor
public enum EnumExample {
    NORMAL(1, "Enum Normal"),
    AVANCADO(2, "Enum Avancado");

    private int id;
    private String descricao;

    @JsonValue
    public Map<String, String> toJson() {
        return Map.of(
                "id", String.valueOf(id),
                "descricao", descricao
        );
    }
}
