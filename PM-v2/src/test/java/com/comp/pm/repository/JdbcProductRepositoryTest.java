package com.comp.pm.repository;

import static org.junit.Assert.assertEquals;

import java.util.Date;
import java.util.List;

import org.junit.Before;
import org.junit.Ignore;
import org.junit.Test;

import com.comp.pm.model.Product;

public class JdbcProductRepositoryTest {

	private ProductRepository productRepository;

	@Before
	public void setUp() {
		productRepository = new JdbcProductRepositoryImpl();
	}

	@Ignore
	@Test
	public void save() {
		Product product = new Product();
		product.setId(124);
		product.setName("test-Product");
		product.setPrice(100.00);
		product.setMakeDate(new Date());
		product.setDescription("test-desc");
		
		productRepository.save(product);

		List<Product> products = productRepository.findAll();
		assertEquals(3, products.size());

	}

}
