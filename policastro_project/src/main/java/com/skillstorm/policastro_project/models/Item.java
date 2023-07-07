package com.skillstorm.policastro_project.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;

@Entity
@Table(name="items")
public class Item {
    
    @Id
    @Column
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "name")
    private String name;

    @Column(name = "units_per_item")
    private double units_per_item;

    @OneToMany(targetEntity = Stock.class, mappedBy = "item")
    @JsonBackReference
    private Stock stock;

    public Item() {
    }

    public Item(int id, String name, double units_per_item) {
        this.id = id;
        this.name = name;
        this.units_per_item = units_per_item;
    }

    public Item(int id, String name, double units_per_item, Stock stock) {
        this.id = id;
        this.name = name;
        this.units_per_item = units_per_item;
        this.stock = stock;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public double getUnits_per_item() {
        return units_per_item;
    }

    public void setUnits_per_item(double units_per_item) {
        this.units_per_item = units_per_item;
    }

    public Stock getStock() {
        return stock;
    }

    public void setStock(Stock stock) {
        this.stock = stock;
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + id;
        result = prime * result + ((name == null) ? 0 : name.hashCode());
        long temp;
        temp = Double.doubleToLongBits(units_per_item);
        result = prime * result + (int) (temp ^ (temp >>> 32));
        result = prime * result + ((stock == null) ? 0 : stock.hashCode());
        return result;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj)
            return true;
        if (obj == null)
            return false;
        if (getClass() != obj.getClass())
            return false;
        Item other = (Item) obj;
        if (id != other.id)
            return false;
        if (name == null) {
            if (other.name != null)
                return false;
        } else if (!name.equals(other.name))
            return false;
        if (Double.doubleToLongBits(units_per_item) != Double.doubleToLongBits(other.units_per_item))
            return false;
        if (stock == null) {
            if (other.stock != null)
                return false;
        } else if (!stock.equals(other.stock))
            return false;
        return true;
    }

    @Override
    public String toString() {
        return "Item [id=" + id + ", name=" + name + ", units_per_item=" + units_per_item + "]";
    }

    
}
