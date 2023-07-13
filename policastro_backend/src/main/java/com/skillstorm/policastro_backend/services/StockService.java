package com.skillstorm.policastro_backend.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skillstorm.policastro_backend.models.Stock;
import com.skillstorm.policastro_backend.repositories.StockRepository;

@Service
public class StockService {
    
    @Autowired
    StockRepository repository;

    public List<Stock> findAllStockListings() {
        return repository.findAll();
    }
}
