package com.app.serv;

import java.io.IOException;

import javax.servlet.GenericServlet;
import javax.servlet.Servlet;
import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet(urlPatterns= {"/hello","/hi"})
public class HelloServlet extends HttpServlet{
	
//	@Override
//	public void init(ServletConfig config) throws ServletException {
//		/*
//		 *  code for servlet's one time initialization before any request
//		 *  
//		 *  i.e
//		 *  
//		 *  reading config-properties
//		 *  creating sole file structures
//		 *  initializing application components
//		 *  
//		 *  
//		 */
//		System.out.println("Init...");
//	}
	
//	@Override
//	public void service(ServletRequest req, ServletResponse res) throws ServletException, IOException {
//		/*
//		 *  request processing logic..
//		 * 
//		 *  -> Input from req
//		 *  -> process
//		 *  -> Output thru res
//		 * 
//		 */
//		System.out.println("service()");
//	}
	
	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		System.out.println("doGet()");
	}
	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		System.out.println("doPost()");
	}
	@Override
	protected void doPut(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		System.out.println("doPut()");
	}
	@Override
	protected void doDelete(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		System.out.println("doDelete()");	
	}
	
	
//	@Override
//	public void destroy() {
//		/*
//		 *  clean-up code, before destroy...
//		 * 
//		 */
//		System.out.println("Destroy...");
//	}

	//---------------------------------------------------
//	
//	@Override
//	public ServletConfig getServletConfig() {
//		return null;
//	}
//	@Override
//	public String getServletInfo() {
//		return null;
//	}
//	
	// -------------------------------------------------

}
