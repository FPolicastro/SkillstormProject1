package com.skillstorm.policastro_backend.controllers;

import java.util.List;

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

    @PutMapping("/item")
    public ResponseEntity<Item> updateItem(@RequestBody Item item){
        Item updatedItem = service.updateItem(item);

        return new ResponseEntity<Item>(updatedItem, HttpStatus.OK);
    }

    @PostMapping("/item")
    public ResponseEntity<Item> createItem(@RequestBody Item item){
        Item createdItem = service.createItem(item);

        return new ResponseEntity<Item>(createdItem, HttpStatus.CREATED);
    }

    @DeleteMapping("/item")
    public ResponseEntity<Item> deleteItem(@RequestBody Item item){
        service.deleteItem(item);
        return new ResponseEntity<Item>(item, HttpStatus.OK);
    }
    
}
