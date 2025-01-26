package com.example.farmacia.infraestrutura.entidades;

import com.example.farmacia.dominio.enums.EnumExample;
import com.example.farmacia.dominio.models.Example;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "exemplo")
@Setter
@Getter
public class ExampleEntidade {

    @Id
    @GeneratedValue(generator = "UUID", strategy = GenerationType.AUTO)
    private long id;

    private String valor;

    @Enumerated(EnumType.STRING)
    private EnumExample tipo;

    private String teste;

    public static ExampleEntidade fromModel(Example example) {
        ExampleEntidade entidade = new ExampleEntidade();
        entidade.setId(example.getId());
        entidade.setValor(example.getValor());
        entidade.setTipo(example.getTipo());
        return entidade;
    }

    public Example toModel() {
        Example example = new Example();
        example.setId(this.id);
        example.setValor(this.valor);
        example.setTipo(this.tipo);
        return example;
    }
}
