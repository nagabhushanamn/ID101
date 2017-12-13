package com.example.demo;

import java.util.List;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.example.demo.model.Todo;
import com.example.demo.repository.TodosRepository;

@SpringBootApplication
public class TodosServerAppApplication {

	public static void main(String[] args) {
		SpringApplication.run(TodosServerAppApplication.class, args);
	}

	@Bean
	public CommandLineRunner test(TodosRepository repository) {
		return args -> {

			// List<Todo> todos = repository.findAll();
			// for (Todo todo : todos) {
			// System.out.println(todo);
			// }

			// Todo todo = new Todo();
			// todo.setText("Learn Life");
			//
			// repository.save(todo);

		};
	}

}
