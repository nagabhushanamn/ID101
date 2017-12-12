package com.comp.pm.repository;

import java.util.List;

import com.comp.pm.model.Product;

public interface ProductRepository {
	void save(Product product);
	void update(Product product);
	boolean delete(int id);
	Product find(int id);
	List<Product> findAll();
	//.....
}
