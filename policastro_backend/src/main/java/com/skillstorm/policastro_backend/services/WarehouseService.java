package com.skillstorm.policastro_backend.services;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skillstorm.policastro_backend.models.Warehouse;
import com.skillstorm.policastro_backend.repositories.WarehouseRepository;

@Service
public class WarehouseService {

    @Autowired
    WarehouseRepository repository;

    public List<Warehouse> findAllWarehouses() {
        return repository.findAll();
    }

    public Warehouse createWarehouse(@Valid Warehouse warehouse) {
        return repository.save(warehouse);
    }
    
}
