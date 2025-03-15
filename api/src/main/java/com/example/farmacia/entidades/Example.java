package com.example.farmacia.entidades;

import com.example.farmacia.enums.EnumExample;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "exemplo")
@Setter
@Getter
public class Example {

    @Id
    @GeneratedValue(generator = "UUID", strategy = GenerationType.AUTO)
    private long id;

    private String valor;

    @Enumerated(EnumType.STRING)
    private EnumExample tipo;

}
