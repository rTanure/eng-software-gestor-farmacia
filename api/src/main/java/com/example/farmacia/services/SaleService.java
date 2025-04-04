package com.example.farmacia.services;

import com.example.farmacia.dtos.request.SaleFilterRequestDTO;
import com.example.farmacia.dtos.request.SaleRequestDTO;
import com.example.farmacia.entidades.Product;
import com.example.farmacia.entidades.Sale;
import com.example.farmacia.repositories.ProductRepository;
import com.example.farmacia.repositories.SaleRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.BeanUtils;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.ExampleMatcher;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class SaleService {

    private final SaleRepository saleRepository;
    private final ProductRepository productRepository;

    // Metodo para salvar uma venda
    public void saveSale(SaleRequestDTO saleRequestDTO) {
        var entity = saleRequestDTO.toModel(); // Converte o DTO para a entidade
        if(saleRepository.findById(entity.getId()) != null) throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Venda já cadastrada");

        Optional<Product> productOptional = productRepository.findById(saleRequestDTO.getProductId());

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

        saleRepository.save(entity);
    }

    // Metodo para visualizar uma venda passando o id
    public Sale getSaleById(UUID id) {
        return saleRepository.findById(id).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Cliente não encontrado."));
    }

    // Metodo para pesquisar vendas pelo id do cliente, venda, receita ou stock
    public List<Sale> getByFilter(SaleFilterRequestDTO SaleFilterRequestDTO) {
        var s = new Sale();

        BeanUtils.copyProperties(SaleFilterRequestDTO, s);

        ExampleMatcher matcher = ExampleMatcher.matching()
                .withIgnoreCase()
                .withIgnoreNullValues()
                .withStringMatcher(ExampleMatcher.StringMatcher.CONTAINING);

        Example<Sale> example = Example.of(s, matcher);

        return saleRepository.findAll(example);
    }

    //Metodo para atualizar uma venda
    public void updateSale(Sale newSale) {
        if (saleRepository.findById(newSale.getId()).isEmpty()) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Cliente não encontrado");
        }
        saleRepository.save(newSale);
    }

    public void deleteById(UUID id) {
        var userExists = saleRepository.existsById(id);

        if (userExists) {
            saleRepository.deleteById(id);
        }
    }
}
