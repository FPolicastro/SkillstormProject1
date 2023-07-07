package com.skillstorm.policastro_project.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skillstorm.policastro_project.models.Warehouse;
import com.skillstorm.policastro_project.repositories.WarehouseRepository;

@Service
public class WarehouseService {

    @Autowired
    WarehouseRepository repository;

    public List<Warehouse> findAllWarehouses() {
        return repository.findAll();
    }
    
}
