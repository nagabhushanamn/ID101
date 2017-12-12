package com.comp.pm.repository;

import java.sql.Connection;
import java.sql.Date;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import com.comp.pm.model.Product;

public class JdbcProductRepositoryImpl implements ProductRepository {

	public void save(Product product) {
		Connection con = null;
		try {
			String sql = "insert into pm.PRODUCTS values(?,?,?,?,?)";
			PreparedStatement ps = con.prepareStatement(sql);
			ps.setInt(1, product.getId());
			ps.setString(2, product.getName());
			ps.setDouble(3, product.getPrice());
			ps.setDate(4, new Date(product.getMakeDate().getTime()));
			ps.setString(5, product.getDescription());
			ps.executeUpdate();
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			if (con != null) {
				try {
					con.close();
				} catch (SQLException e) {
					e.printStackTrace();
				}
			}
		}
	}

	public void update(Product product) {
		Connection con = null;
		try {
			String sql = "update pm.PRODUCTS set name=?,price=?,make_date=?,description=? where id=?";
			PreparedStatement ps = con.prepareStatement(sql);
			ps.setInt(5, product.getId());
			ps.setString(1, product.getName());
			ps.setDouble(2, product.getPrice());
			ps.setDate(3, new Date(product.getMakeDate().getTime()));
			ps.setString(4, product.getDescription());
			ps.executeUpdate();
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			if (con != null) {
				try {
					con.close();
				} catch (SQLException e) {
					e.printStackTrace();
				}
			}
		}
	}

	public boolean delete(int id) {
		Connection con = null;
		try {
			String sql = "delete from pm.PRODUCTS where id=?";
			PreparedStatement ps = con.prepareStatement(sql);
			ps.setInt(1, id);
			ps.executeUpdate();
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			if (con != null) {
				try {
					con.close();
				} catch (SQLException e) {
					e.printStackTrace();
				}
			}
		}
		return true;
	}

	public Product find(int id) {
		Connection con = null;
		Product product = null;
		try {
			String sql = "select * from pm.PRODUCTS where id=?";
			PreparedStatement ps = con.prepareStatement(sql);
			ps.setInt(1, id);
			ResultSet rs = ps.executeQuery();
			if (rs.next()) {
				product = new Product();
				product.setId(rs.getInt(1));
				product.setName(rs.getString(2));
				product.setPrice(rs.getDouble(3));
				product.setMakeDate(rs.getDate(4));
				product.setDescription(rs.getString(5));
			}

		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			if (con != null) {
				try {
					con.close();
				} catch (SQLException e) {
					e.printStackTrace();
				}
			}
		}
		return product;
	}

	public List<Product> findAll() {
		Connection con = null;
		List<Product> products = new ArrayList<Product>();
		try {
			String sql = "select * from pm.PRODUCTS";
			PreparedStatement ps = con.prepareStatement(sql);
			ResultSet rs = ps.executeQuery();
			while (rs.next()) {
				Product product = new Product();
				product.setId(rs.getInt(1));
				product.setName(rs.getString(2));
				product.setPrice(rs.getDouble(3));
				product.setMakeDate(rs.getDate(4));
				product.setDescription(rs.getString(5));
				products.add(product);
			}

		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			if (con != null) {
				try {
					con.close();
				} catch (SQLException e) {
					e.printStackTrace();
				}
			}
		}
		return products;
	}

}
