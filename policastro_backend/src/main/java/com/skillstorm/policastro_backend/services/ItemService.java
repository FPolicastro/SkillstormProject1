package com.skillstorm.policastro_backend.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skillstorm.policastro_backend.models.Item;
import com.skillstorm.policastro_backend.repositories.ItemRepository;

@Service
public class ItemService {

    @Autowired
    ItemRepository repository;

    public List<Item> findAllItems() {
        return repository.findAll();
    }
    
}
