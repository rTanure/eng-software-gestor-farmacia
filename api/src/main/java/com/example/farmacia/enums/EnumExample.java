package com.example.farmacia.enums;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;
import lombok.AllArgsConstructor;

import java.util.Map;

@AllArgsConstructor
public enum EnumExample {
    NORMAL("NORMAL", "Enum Normal"),
    AVANCADO("AVANCADO", "Avancado");

    private String id;
    private String descricao;

    @JsonValue
    public Map<String, String> toJson() {
        return Map.of(
                "id", String.valueOf(id),
                "descricao", descricao
        );
    }
}
