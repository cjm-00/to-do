package io.nology.to_do_api.task;

import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class TaskService {

    private TaskRepository repo;

    TaskService(TaskRepository repo) {
        this.repo = repo;
    }

    public List<Task> getAll() {
        return this.repo.findAll();
    }
}
