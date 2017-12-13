package com.comp.app.web;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.comp.app.model.Dog;
import com.comp.app.model.Person;

/**
 * Servlet implementation class PersonController
 */
@WebServlet(urlPatterns = { "/person-det" })
public class PersonController extends HttpServlet {
	private static final long serialVersionUID = 1L;

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		// create model

		Dog dog = new Dog();
		dog.setName("puppy");

		Person person = new Person();
		person.setName("Nag");
		person.setEmail("nagabhushanamn@gmail.com");
		person.setMob("9945674228");
		person.setDog(dog);

		//

		request.setAttribute("person", person);
		request.getRequestDispatcher("person-details.jsp").forward(request, response);

	}

}
