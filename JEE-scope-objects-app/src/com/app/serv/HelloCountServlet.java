package com.app.serv;

import java.io.IOException;

import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

/**
 * Servlet implementation class HelloCountServlet
 */
@WebServlet("/hello")
public class HelloCountServlet extends HttpServlet {

	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		HttpSession session = request.getSession();
		ServletContext context = getServletContext();

		// Integer count = (Integer) request.getAttribute("helloCount");
		// Integer count = (Integer) session.getAttribute("helloCount");
		Integer count = (Integer) context.getAttribute("helloCount");
		if (count == null) {
			count = 1;
		} else {
			count++;
		}
		// request.setAttribute("helloCount", count);
		// session.setAttribute("helloCount", count);
		context.setAttribute("helloCount", count);

		request.getRequestDispatcher("display.jsp").forward(request, response);

	}

}
