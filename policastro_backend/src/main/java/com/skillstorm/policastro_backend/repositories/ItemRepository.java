package com.skillstorm.policastro_backend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.skillstorm.policastro_backend.models.Item;

@Repository
public interface ItemRepository extends JpaRepository<Item,Integer> {
    
}
