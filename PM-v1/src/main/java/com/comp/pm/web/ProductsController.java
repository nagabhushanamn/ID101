package com.comp.pm.web;

import java.io.IOException;
import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.List;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.comp.pm.model.Product;
import com.comp.pm.repository.JdbcProductRepositoryImpl;
import com.comp.pm.repository.ProductRepository;

@WebServlet(urlPatterns = { "/products", "/save-product", "/update-product", "/delete-product", "/edit-product" })
public class ProductsController extends HttpServlet {

	private ProductRepository productRepository;

	@Override
	public void init(ServletConfig config) throws ServletException {
		productRepository = new JdbcProductRepositoryImpl();
	}

	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {

		String reqPath = req.getRequestURI();
		if (reqPath.equals("/pm/products")) {
			List<Product> products = productRepository.findAll();
			req.setAttribute("allProducts", products);
			RequestDispatcher rd = req.getRequestDispatcher("pm.jsp");
			rd.forward(req, resp);
		}
		if (reqPath.equals("/pm/delete-product")) {
			String id = req.getParameter("id");
			productRepository.delete(Integer.parseInt(id));
			resp.sendRedirect("products");
		}
		if (reqPath.equals("/pm/edit-product")) {
			String id = req.getParameter("id");
			Product product = productRepository.find(Integer.parseInt(id));
			req.setAttribute("product", product);
			RequestDispatcher rd = req.getRequestDispatcher("edit-product.jsp");
			rd.forward(req, resp);
		}

	}

	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {

		String reqPath = req.getRequestURI();

		String id = req.getParameter("id");
		String name = req.getParameter("name");
		String price = req.getParameter("price");
		String makeDate = req.getParameter("makeDate");
		String description = req.getParameter("description");

		Product product = new Product();
		product.setId(Integer.parseInt(id));
		product.setName(name);
		product.setPrice(Double.parseDouble(price));
		DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
		try {
			product.setMakeDate(dateFormat.parse(makeDate));
		} catch (ParseException e) {
			e.printStackTrace();
		}
		product.setDescription(description);

		if (reqPath.equals("/pm/save-product")) {
			productRepository.save(product);
		}
		if (reqPath.equals("/pm/update-product")) {
			productRepository.update(product);
		}

		// req.setAttribute("message", "New Product saved");
		// RequestDispatcher rd = req.getRequestDispatcher("status.jsp");
		// rd.forward(req, resp);

		// resp.sendRedirect("status.jsp");
		// resp.sendRedirect("http://www.google.com");

		resp.sendRedirect("products"); // New Url to client ,

		//

	}

}
