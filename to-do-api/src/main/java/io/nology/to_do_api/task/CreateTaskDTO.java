package io.nology.to_do_api.task;

import jakarta.validation.constraints.NotBlank;

public class CreateTaskDTO {

    @NotBlank(message = "Please enter some text")
    private String task;

    // private Integer categoryId;

    public String getTask() {
        return task;
    }

    public void setTask(String task) {
        this.task = task;
    }

    // public Integer getCategoryId() {
    // return categoryId;
    // }

    // public void setCategoryId(Integer categoryId) {
    // this.categoryId = categoryId;
    // }
}
