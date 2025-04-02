package com.example.farmacia.services;

import com.example.farmacia.dtos.request.ProductCreatRequestDTO;
import com.example.farmacia.dtos.request.ProductFilterRequestDTO;
import com.example.farmacia.entidades.Product;
import com.example.farmacia.repositories.ProductRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.BeanUtils;
import org.springframework.data.domain.*;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.UUID;


@Service
@RequiredArgsConstructor
public class StockService {

    private final ProductRepository productRepository;

    // Retorna quantidade de medicamentos no estoque
    public Integer getQuantityMedicines() {
        var products = productRepository.findAll();
        return products.stream()
                .mapToInt(Product::getReceivedAmount)
                .sum();
    }

    // Metodo de criação de estoque de produto
    public void createProduct(ProductCreatRequestDTO product) {
        var entity = product.toModel(); // Converte o DTO para a entidade
        if(productRepository.findByCode(product.getCode()) != null) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Produto já cadastrado");
        }
        productRepository.save(entity);
    }

    // Metodo de busca de produto por id, nome ou codigo
    public List<Product> findByFilter(ProductFilterRequestDTO productFilterRequestDTO) {
        Product p = new Product();

        BeanUtils.copyProperties(productFilterRequestDTO, p); // Converte o DTO para a entidade

        // Configura o matcher para ignorar case e null values
        ExampleMatcher matcher = ExampleMatcher.matching()
                .withIgnoreCase()
                .withIgnoreNullValues()
                .withStringMatcher(ExampleMatcher.StringMatcher.CONTAINING);

        // Cria o exemplo com o matcher
        Example<Product> example = Example.of(p, matcher);
        return productRepository.findAll(example);
    }

    // Metodo para recuperar produto por id
    public Product getProduct(UUID id) {
        return productRepository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Produto não encontrado."));
    }

    // Metodo de ediçao de produto por id
    public void updateProductById(Product product) {
        var productExists = productRepository.existsById(product.getId());

        if (productExists) {
            productRepository.save(product);
        } else {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Produto não encontrado");
        }
    }

    public void deleteProductById(UUID id) {
        productRepository.findById(id)
                .ifPresentOrElse(productRepository::delete, () -> {
                    throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Produto não encontrado");
                });
    }
}
