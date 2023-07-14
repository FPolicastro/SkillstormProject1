package com.skillstorm.policastro_backend.services;

import java.util.List;
import java.util.Optional;

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

    public Item findById(int id){
        Optional<Item> itemOptional = repository.findById(id);
        if (itemOptional.isPresent()){
            return itemOptional.get();
        }
        else{
            System.out.println("Id not found");
            return null;
        }
    }

    public Item updateItem(Item item) {
        //TODO handle capacity
        return repository.save(item);
    }

	public Item createItem(Item item) {
		return repository.save(item);
	}

    public void deleteItem(Item item) {
        repository.delete(item);
    }
    
}
