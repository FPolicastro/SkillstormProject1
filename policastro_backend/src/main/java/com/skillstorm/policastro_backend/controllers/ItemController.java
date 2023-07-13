package com.skillstorm.policastro_backend.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skillstorm.policastro_backend.models.Item;
import com.skillstorm.policastro_backend.services.ItemService;

@RestController
@CrossOrigin("*")
@RequestMapping("/items")
public class ItemController {

    @Autowired
    ItemService service;

    @GetMapping
    public ResponseEntity<List<Item>> findAllItems(){
        List<Item> warehouses = service.findAllItems();

        return new ResponseEntity<List<Item>>(warehouses, HttpStatus.OK);
    }
    
}
