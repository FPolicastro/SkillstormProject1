package com.skillstorm.policastro_backend.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skillstorm.policastro_backend.repositories.ItemRepository;

@Service
public class ItemService {

    @Autowired
    ItemRepository repository;
    
}
