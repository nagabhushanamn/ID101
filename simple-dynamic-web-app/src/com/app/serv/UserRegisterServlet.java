package com.app.serv;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet(urlPatterns = { "/register" })
public class UserRegisterServlet extends HttpServlet {

	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {

		// Input
		String uname = req.getParameter("uname");
		String pword = req.getParameter("pword");
		String name = req.getParameter("name");

		// Process

		// ==> save in data-base
		// -------------------------------------------------
		// do it
		// -------------------------------------------------

		req.setAttribute("user", name);

		RequestDispatcher dispatcher = req.getRequestDispatcher("/WEB-INF/views/register-status.jsp");
		dispatcher.forward(req, resp);

		// Output
		// PrintWriter out = resp.getWriter();
		// out.print("<!DOCTYPE html>");
		// out.println("<html>");
		// out.println("<head>");
		// out.println("<title>index</title>");
		// out.println("<link href=\"bootstrap/css/bootstrap.css\"
		// rel=\"stylesheet\">");
		// out.println("</head>");
		// out.println("<body>");
		// out.println("<div class=\"page-header\">simple-web-app</div>");
		// out.println("hello " + name + " ! you have registered successfully with us");
		// out.println("</body>");
		// out.println("</html>");
		// out.close();

	}

}
