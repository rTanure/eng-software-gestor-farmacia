package com.example.farmacia.services;

import com.example.farmacia.dtos.request.ProductCreatRequestDTO;
import com.example.farmacia.dtos.request.ProductFilterRequestDTO;
import com.example.farmacia.dtos.response.ProductResponseDTO;
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

    // Metodo de criação de estoque de produto
    public void createProduct(ProductCreatRequestDTO product) {
        var entity = product.toModel(); // Converte o DTO para a entidade
        if(productRepository.findByCode(product.getCode()) != null) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Produto já cadastrado");
        }
        productRepository.save(entity);
    }

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

    // Metodo de ediçao de produto por id
    public ProductResponseDTO updateProduct(UUID id, ProductCreatRequestDTO product) {
        // Busca o produto no banco de dados
        Product productToUpdate = productRepository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Produto não encontrado"));

        // Atualiza os campos do produto(apenas os campos que foram passados no DTO)
        if(product.getName() != null) productToUpdate.setName(product.getName());
        if(product.getCode() != null) productToUpdate.setCode(product.getCode());
        if(product.getBatch() != null) productToUpdate.setBatch(product.getBatch());
        if(product.getExpirationDate() != null) productToUpdate.setExpirationDate(product.getExpirationDate());
        if(product.getReceivedAmount() != 0) productToUpdate.setReceivedAmount(product.getReceivedAmount());
        if(product.getPurchasePrice() != 0) productToUpdate.setPurchasePrice(product.getPurchasePrice());
        if(product.getSupplierId() != null) productToUpdate.setSupplierId(product.getSupplierId());

        // Salva a entidade no banco de dados
        Product updatedProduct = productRepository.save(productToUpdate);
        return ProductResponseDTO.fromProduct(updatedProduct); // Converte a entidade para DTO e retorna
    }

    public void deleteProductById(UUID id) {
        productRepository.findById(id)
                .ifPresentOrElse(productRepository::delete, () -> {
                    throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Produto não encontrado");
                });
    }
}
