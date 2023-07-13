package com.skillstorm.policastro_backend.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skillstorm.policastro_backend.models.Stock;
import com.skillstorm.policastro_backend.services.StockService;

@RestController
@CrossOrigin("*")
@RequestMapping("/stock")
public class StockController {

    @Autowired
    StockService service;

    @GetMapping
    public ResponseEntity<List<Stock>> findAllStockListings(){
        List<Stock> stockListings = service.findAllStockListings();

        return new ResponseEntity<List<Stock>>(stockListings, HttpStatus.OK);
    }
    
}