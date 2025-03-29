package com.example.farmacia.dtos.request;

import lombok.Getter;
import lombok.Setter;

import java.util.UUID;

@Getter
@Setter
public class ClientUpdateRequestDTO extends ClientCreatRequestDTO {
    private UUID id;
}
