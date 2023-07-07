package com.skillstorm.policastro_project.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skillstorm.policastro_project.repositories.ItemRepository;

@Service
public class ItemService {

    @Autowired
    ItemRepository repository;
    
}
