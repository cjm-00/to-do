import classes from "./NewTaskForm.module.scss";
import Button from "../Button/Button";
import Selection from "../Form/Selection/Selection";
import Input from "../Form/Input/Input";
import { createTask, getTasks, TaskEntity } from "../../services/task-services";
import { TaskFormData } from "./schema";
import { useEffect, useState } from "react";

export default function NewTaskForm({
  tasksData,
  setTasksData,
}: {
  tasksData: TaskEntity[];
  setTasksData: (updatedTaskList: TaskEntity[]) => void;
}) {
  const [newTaskDesc, setNewTaskDesc] = useState("");
  const [newTaskCat, setNewTaskCat] = useState("");

  const handleTaskChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setNewTaskDesc(event.target.value);
  };

  const handleCategoryChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setNewTaskCat(event.target.value);
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = { task: newTaskDesc, category: newTaskCat, isArchived: false };
    await createTask(data);
    const updatedTaskList = await getTasks();
    setTasksData(updatedTaskList);
  };

  return (
    <form className={classes.newTask} onSubmit={onSubmit}>
      <Input name="task" value={newTaskDesc} onChange={handleTaskChange} />
      <Selection
        name={"category"}
        value={newTaskCat}
        onChange={handleCategoryChange}
        defaultValue=""
      />
      <Button type="submit">Add Task</Button>
    </form>
  );
}
