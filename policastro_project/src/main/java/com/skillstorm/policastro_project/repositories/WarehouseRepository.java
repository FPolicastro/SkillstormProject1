package com.skillstorm.policastro_project.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.skillstorm.policastro_project.models.Warehouse;

@Repository
public interface WarehouseRepository extends JpaRepository<Warehouse,Integer> {
    
}
