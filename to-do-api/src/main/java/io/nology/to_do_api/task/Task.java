package io.nology.to_do_api.task;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;

import io.nology.to_do_api.category.Category;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

// id: number
// task: string
// category: many2one

@Entity
@Table(name = "tasks")
public class Task {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false)
    private Long id;

    @Column
    private String task;

    public String getTask() {
        return task;
    }

    public void setTask(String task) {
        this.task = task;
    }

    public Task(String task) {
        this.task = task;

    }

    public Task() {
        // no args constructor for JPA
    }

    // @ManyToOne
    // @JoinColumn(name = "category_id")
    // private Category category;

    // public void setCategory(Category category) {
    // this.category = category;
    // }

}
