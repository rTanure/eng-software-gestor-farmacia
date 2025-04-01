package com.example.farmacia.services;

import com.example.farmacia.dtos.request.SaleRequestDTO;
import com.example.farmacia.dtos.response.SaleResponseDTO;
import com.example.farmacia.entidades.Product;
import com.example.farmacia.entidades.Sale;
import com.example.farmacia.repositories.ProductRepository;
import com.example.farmacia.repositories.SaleRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import javax.swing.text.html.Option;
import java.util.Optional;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class SaleService {

    private final SaleRepository saleRepository;
    private final ProductRepository productRepository;

    // Metodo para salvar uma venda
    public SaleResponseDTO saveSale(SaleRequestDTO saleRequestDTO) {
        Optional<Product> productOptional = productRepository.findById(saleRequestDTO.getIdProduct());

        if(productOptional.isEmpty()) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Produto não encontrado");
        }

        Product products = productOptional.get();

        if(products.getReceivedAmount() < saleRequestDTO.getAmount()) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Quantidade insuficiente em estoque");
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
                .idClient(saleRequestDTO.getIdClient())
                .idPrescription(saleRequestDTO.getIdPrescription())
                .idProduct(saleRequestDTO.getIdProduct())
                .date(saleRequestDTO.getPaymenthDate())
                .amount(saleRequestDTO.getAmount())
                .build();

        Sale savedSale = saleRepository.save(newSale);
        return SaleResponseDTO.fromSale(savedSale);
    }

    // Metodo para visualizar uma venda passando o id
    public Sale getSaleById(UUID id) {
        return saleRepository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Venda não encontrada."));
    }
}
