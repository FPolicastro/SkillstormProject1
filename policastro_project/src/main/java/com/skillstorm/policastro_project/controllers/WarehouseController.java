package com.skillstorm.policastro_project.controllers;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skillstorm.policastro_project.services.WarehouseService;
import com.skillstorm.policastro_project.models.Warehouse;

@RestController
@RequestMapping("/warehouses")
public class WarehouseController {

    @Autowired
    WarehouseService warehouseService;

    @GetMapping
    public ResponseEntity<List<Warehouse>> findAllWarehouses(){
        List<Warehouse> warehouses = warehouseService.findAllWarehouses();

        return new ResponseEntity<List<Warehouse>>(warehouses, HttpStatus.OK);

    }
    
}
