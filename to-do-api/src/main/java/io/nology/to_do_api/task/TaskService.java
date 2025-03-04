package io.nology.to_do_api.task;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import io.nology.to_do_api.category.Category;
import io.nology.to_do_api.category.CategoryService;

@Service
public class TaskService {
    // private CategoryService categoryService;
    private TaskRepository repo;

    @Autowired
    public TaskService(TaskRepository repo
    // , CategoryService categoryService
    ) {
        this.repo = repo;
        // this.categoryService = categoryService;
    }

    public List<Task> getAll() {
        return this.repo.findAll();
    }

    public Task createTask(CreateTaskDTO data) {

        Task newTask = new Task();

        newTask.setTask(data.getTask().trim());
        // if (data.getCategoryId() != null) {
        // Category foundCategory =
        // this.categoryService.getById(data.getCategoryId()).orElse(null);
        // newTask.setCategory(foundCategory);
        // }
        return this.repo.save(newTask);

    }

}
