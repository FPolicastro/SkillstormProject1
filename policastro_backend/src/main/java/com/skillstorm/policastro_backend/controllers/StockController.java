package com.skillstorm.policastro_backend.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
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
    
    @PostMapping("/listing")
    public ResponseEntity<Stock> createStock( @RequestBody Stock stock){
        Optional<Stock> createdStock = service.createStock(stock);
        if(createdStock.isPresent()){
            return new ResponseEntity<Stock>(createdStock.get(), HttpStatus.CREATED);
        }else{
            return new ResponseEntity<Stock>(HttpStatus.NOT_MODIFIED);
        }
    }

    @PutMapping("/listing")
    public ResponseEntity<Stock> updateStock( @RequestBody Stock stock){
        Stock updatedStock = service.updateStock(stock);

        return new ResponseEntity<Stock>(updatedStock, HttpStatus.OK);
    }

    @DeleteMapping("/listing")
    public ResponseEntity<Stock> deleteStock(@RequestBody Stock stock){
        service.deleteStock(stock);
        return new ResponseEntity<Stock>(stock, HttpStatus.OK);
    }
}