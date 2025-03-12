import { TaskFormData } from "../components/NewTaskForm/schema";

export interface TaskEntity {
  task: string;
  category: string;
  id: number;
  isArchived: boolean;
}

export const getTasks = async () => {
  const response = await fetch("http://localhost:8080/tasks");
  const tasksData = await response.json();
  if (!response.ok) {
    throw new Error("Problem retrieving task list from database :c");
  }
  // console.log(tasksData);
  return tasksData;
};

export const createTask = async (data: TaskFormData) => {
  const response = await fetch("http://localhost:8080/tasks", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!response.ok) {
    throw new Error("Cannot create task");
  }
  return await response.json();
};

export const archiveTask = async (id: number) => {
  const response = await fetch(`http://localhost:8080/tasks/archive/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!response.ok) {
    throw new Error("Cannot archive task");
  }
};

export const updateTask = async (id: number, data: TaskFormData) => {
  const response = await fetch(`http://localhost:8080/tasks/update/${id}`, {
    method: "PATCH",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!response.ok) {
    throw new Error("Cannot update task");
  }
};
