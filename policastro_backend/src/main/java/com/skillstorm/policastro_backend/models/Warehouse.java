package com.skillstorm.policastro_backend.models;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name="warehouses")
public class Warehouse {
    
    @Id
    @Column
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name="location")
    private String location;

    @Column(name="units")
    private int units;

    @Column(name="current_load")
    private double current_load;

    @JsonIgnoreProperties("warehouse")
    @OneToMany(targetEntity = Stock.class, mappedBy = "warehouse")
    private List<Stock> stock;

    public Warehouse() {
    }

    

    public Warehouse(int id, String location, int units, double current_load, List<Stock> stock) {
        this.id = id;
        this.location = location;
        this.units = units;
        this.current_load = current_load;
        this.stock = stock;
    }



    public Warehouse(int id, String location, int units, List<Stock> stock) {
        this.id = id;
        this.location = location;
        this.units = units;
        this.stock = stock;
    }

    public Warehouse(int id, String location, List<Stock> stock) {
        this.id = id;
        this.location = location;
        this.stock = stock;
    }

    public Warehouse(int id, String location) {
        this.id = id;
        this.location = location;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public List<Stock> getStock() {
        return stock;
    }

    public void setStock(List<Stock> stock) {
        this.stock = stock;
    }

    public int getUnits() {
        return units;
    }

    public void setUnits(int units) {
        this.units = units;
    }

    public double getcurrent_load() {
        return current_load;
    }

    public void setcurrent_load(double current_load) {
        this.current_load = current_load;
    }


    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + id;
        result = prime * result + ((location == null) ? 0 : location.hashCode());
        result = prime * result + units;
        long temp;
        temp = Double.doubleToLongBits(current_load);
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
        Warehouse other = (Warehouse) obj;
        if (id != other.id)
            return false;
        if (location == null) {
            if (other.location != null)
                return false;
        } else if (!location.equals(other.location))
            return false;
        if (units != other.units)
            return false;
        if (Double.doubleToLongBits(current_load) != Double.doubleToLongBits(other.current_load))
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
        return "Warehouse [id=" + id + ", location=" + location + ", units=" + units + ", current_load=" + current_load
                + ", stock=" + stock + "]";
    }

    


}
