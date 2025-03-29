package com.example.farmacia.services;

import com.example.farmacia.dtos.SaleRequestDTO;
import com.example.farmacia.dtos.SaleResponseDTO;
import com.example.farmacia.entidades.Product;
import com.example.farmacia.entidades.Sale;
import com.example.farmacia.repositories.ProductRepository;
import com.example.farmacia.repositories.SaleRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
@RequiredArgsConstructor
public class SaleService {

    private final SaleRepository saleRepository;
    private final ProductRepository productRepository;

    // Metodo para salvar uma venda
    public SaleResponseDTO saveSale(SaleRequestDTO saleRequestDTO) {
        Product products = productRepository.findByCode(saleRequestDTO.getCodeProduct());

        if(products == null) {
            throw new RuntimeException("Produto não encontrado");
        }

        if(products.getReceivedAmount() < saleRequestDTO.getAmount()) {
            throw new RuntimeException("Quantidade insuficiente em estoque");
        } else {
            products.removeAmount(saleRequestDTO.getAmount());
        }

        if(products.getReceivedAmount() == 0) {
            productRepository.delete(products);
        } else {
            productRepository.save(products);
        }

        // Salva a venda no banco de dados
        Sale newSale = Sale.builder()
                .nameClient(saleRequestDTO.getNameClient())
                .nameProduct(saleRequestDTO.getNameProduct())
                .codeProduct(saleRequestDTO.getCodeProduct())
                .paymenthMethod(saleRequestDTO.getPaymenthMethod())
                .paymenthDate(saleRequestDTO.getPaymenthDate())
                .amount(saleRequestDTO.getAmount())
                .build();

        Sale savedSale = saleRepository.save(newSale);
        return SaleResponseDTO.fromSale(savedSale);
    }

    // Metodo para visualizar uma venda passando o id
    public Sale getSaleById(UUID id) {
        return saleRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Venda não encontrada."));
    }
}
