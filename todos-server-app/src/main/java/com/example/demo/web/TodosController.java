package com.example.demo.web;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.example.demo.model.Todo;
import com.example.demo.repository.TodosRepository;

@Controller
public class TodosController {

	@Autowired
	private TodosRepository todosRepository;

	// HTML
	@RequestMapping(value = "/todos", method = RequestMethod.GET, produces = { "text/html" })
	public String getAllTodosToHTML(Model model) {
		List<Todo> todos = todosRepository.findAll();
		model.addAttribute("todos", todos);
		return "todos";
	}

	// JSON or XML
	@RequestMapping(value = "/todos", method = RequestMethod.GET, produces = { "application/json", "application/xml" })
	public @ResponseBody TodosWrapper getAllTodos() {
		TodosWrapper wrapper = new TodosWrapper();
		wrapper.setTodos(todosRepository.findAll());
		return wrapper;
	}

}
