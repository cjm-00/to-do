package io.nology.to_do_api.category;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

@Service
public class CategoryService {

    private CategoryRepository repo;

    CategoryService(CategoryRepository repo) {
        this.repo = repo;
    }

    public List<Category> getAll() {
        return this.repo.findAll();
    }

    public Optional<Category> getById(Integer id) {
        return this.repo.findById(id);
    }
}
