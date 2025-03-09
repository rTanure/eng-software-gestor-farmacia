package com.example.farmacia.infraestrutura.entidades;

import com.example.farmacia.dominio.models.Product;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;
import java.util.UUID;

@Entity
@Table(name = "stock")
@Setter
@Getter
public class ProductEntidade {
    @Id
    @GeneratedValue(generator = "UUID", strategy = GenerationType.AUTO)
    private UUID id;

    private String name; // nome do produto
    private String code; // código de barras
    private String batch; // número do lote
    private String supplier; // fornecedor
    private LocalDate expirationDate; // data de validade
    private int receivedAmount; // quantidade recebida
    private double purchasePrice; // preço de compra

    public static ProductEntidade fromModel(Product product) {
        ProductEntidade entidade = new ProductEntidade();
        entidade.setId(product.getId());
        entidade.setName(product.getName());
        entidade.setCode(product.getCode());
        entidade.setBatch(product.getBatch());
        entidade.setSupplier(product.getSupplier());
        entidade.setExpirationDate(product.getExpirationDate());
        entidade.setReceivedAmount(product.getReceivedAmount());
        entidade.setPurchasePrice(product.getPurchasePrice());
        return entidade;
    }

    public Product toModel() {
        Product product = new Product();
        product.setId(this.id);
        product.setName(this.name);
        product.setCode(this.code);
        product.setBatch(this.batch);
        product.setSupplier(this.supplier);
        product.setExpirationDate(this.expirationDate);
        product.setReceivedAmount(this.receivedAmount);
        product.setPurchasePrice(this.purchasePrice);
        return product;
    }
}
