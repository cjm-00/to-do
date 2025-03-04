package io.nology.to_do_api;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import io.github.cdimascio.dotenv.Dotenv;
import io.nology.to_do_api.task.Task;

@SpringBootApplication
public class ToDoApiApplication {

	public static void main(String[] args) {

		SpringApplication.run(ToDoApiApplication.class, args);
	}

}
