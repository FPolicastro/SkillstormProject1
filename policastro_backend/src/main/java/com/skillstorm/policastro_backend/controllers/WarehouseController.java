package com.skillstorm.policastro_backend.controllers;


import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skillstorm.policastro_backend.services.WarehouseService;
import com.skillstorm.policastro_backend.models.Warehouse;

@RestController
@CrossOrigin("*")
@RequestMapping("/warehouses")
public class WarehouseController {

    @Autowired
    WarehouseService warehouseService;

    @GetMapping
    public ResponseEntity<List<Warehouse>> findAllWarehouses(){
        List<Warehouse> warehouses = warehouseService.findAllWarehouses();

        return new ResponseEntity<List<Warehouse>>(warehouses, HttpStatus.OK);

    }

    @PostMapping("/warehouse")
    public ResponseEntity<Warehouse> createWarehouse( @RequestBody Warehouse warehouse){
        Warehouse createdWarehouse = warehouseService.createWarehouse(warehouse);

        return new ResponseEntity<Warehouse>(createdWarehouse, HttpStatus.CREATED);
    }

    @PutMapping("/warehouse")
    public ResponseEntity<Warehouse> updateWarehouse( @RequestBody Warehouse warehouse){
        Warehouse updatedWarehouse = warehouseService.updateWarehouse(warehouse);

        return new ResponseEntity<Warehouse>(updatedWarehouse, HttpStatus.OK);
    }
    
}
