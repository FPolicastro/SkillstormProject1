package com.skillstorm.policastro_project.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skillstorm.policastro_project.repositories.StockRepository;

@Service
public class StockService {
    
    @Autowired
    StockRepository repository;
}
