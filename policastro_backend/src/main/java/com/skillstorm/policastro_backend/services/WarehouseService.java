package com.skillstorm.policastro_backend.services;

import java.util.List;
import java.util.Optional;

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

    public Warehouse findById(int id){
        Optional<Warehouse> warehouseOptional = repository.findById(id);
        if (warehouseOptional.isPresent()){
            return warehouseOptional.get();
        }
        else{
            System.out.println("Id not found");
            return null;
        }
    }

    public Warehouse createWarehouse(@Valid Warehouse warehouse) {
        return repository.save(warehouse);
    }

    public Warehouse updateWarehouse(@Valid Warehouse warehouse) {
        //TODO deal with storage capacity
        return repository.save(warehouse);
    }

    public void deleteWarehouse(Warehouse warehouse) {
        repository.delete(warehouse);
    }
    
}
