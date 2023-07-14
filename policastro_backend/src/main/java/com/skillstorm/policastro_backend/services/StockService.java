package com.skillstorm.policastro_backend.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skillstorm.policastro_backend.models.Stock;
import com.skillstorm.policastro_backend.repositories.StockRepository;

@Service
public class StockService {
    
    @Autowired
    StockRepository repository;

    @Autowired
    ItemService itemService;

    @Autowired
    WarehouseService warehouseService;

    public List<Stock> findAllStockListings() {
        return repository.findAll();
    }

    public Optional<Stock> createStock(Stock stock) {
        repository.save(stock);
        return repository.findById(stock.getId());
    }

    public Stock updateStock(Stock stock) {
        stock.setItem(itemService.findById(stock.getItem().getId()));
        stock.setWarehouse(warehouseService.findById(stock.getWarehouse().getId()));
        return repository.save(stock);
    }

    public void deleteStock(Stock stock) {
        repository.delete(stock);
    }

    public void deleteStockById(int id) {
        repository.deleteById(id);
    }
}
