package com.example.farmacia.services;

import com.example.farmacia.dtos.request.ProductRequestDTO;
import com.example.farmacia.dtos.response.ProductResponseDTO;
import com.example.farmacia.entidades.Product;
import com.example.farmacia.repositories.ProductRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.UUID;


@Service
@RequiredArgsConstructor
public class StockService {

    private final ProductRepository productRepository;

    // Metodo de criação de estoque de produto
    public ProductResponseDTO createProduct(ProductRequestDTO product) {
        // Cria uma nova entidade de produto
        Product newProduct = Product.builder()
                .name(product.getName())
                .code(product.getCode())
                .batch(product.getBatch())
                .expirationDate(product.getExpirationDate())
                .receivedAmount(product.getReceivedAmount())
                .purchasePrice(product.getPurchasePrice())
                .supplierId(product.getSupplierId())
                .build();
        // Salva a entidade no banco de dados
        Product savedProduct = productRepository.save(newProduct);
        return ProductResponseDTO.fromProduct(savedProduct); // Converte a entidade para DTO e retorna
    }

    public Page<ProductResponseDTO> findProductsByName(String name, int page, int size, String sortBy, String order) {
        Sort.Direction direction = Sort.Direction.fromString(order);
        Pageable pageable = PageRequest.of(page, size, Sort.by(direction, sortBy));
        Page<Product> products = productRepository.findByNameContainingIgnoreCase(name, pageable);
        return products.map(ProductResponseDTO::fromProduct);
    }

    // Metodo de ediçao de produto por id
    public ProductResponseDTO updateProduct(UUID id, ProductRequestDTO product) {
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
