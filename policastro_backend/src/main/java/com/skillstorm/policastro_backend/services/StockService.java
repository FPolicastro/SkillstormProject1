package com.skillstorm.policastro_backend.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skillstorm.policastro_backend.repositories.StockRepository;

@Service
public class StockService {
    
    @Autowired
    StockRepository repository;
}
