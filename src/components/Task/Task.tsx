import Button from "../Button/Button";
import Delete from "../Delete/Delete";
import Input from "../Form/Input/Input";
import Selection from "../Form/Selection/Selection";
import classes from "./Task.module.scss";
import clone from "../../assets/clone-solid.svg";
import { useState } from "react";
import {
  archiveTask,
  createTask,
  getTasks,
  TaskEntity,
} from "../../services/task-services";

export default function Task({
  data,
  runUpdate,
  setTasksData,
}: {
  data: TaskEntity;
  runUpdate: (taskDesc: string, selectedCategory: string, id: number) => void;
  setTasksData: (updatedTaskList: TaskEntity[]) => void;
}) {
  const [selectedCategory, setSelectedCategory] = useState(data.category);
  const [taskDesc, setTaskDesc] = useState(data.task);

  const handleCatChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(event.target.value);
  };

  const handleTaskChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTaskDesc(event.target.value);
  };

  const handleDeleteClick = async () => {
    await archiveTask(data.id);
    const updatedTaskList: TaskEntity[] = await getTasks();
    setTasksData(updatedTaskList);
  };

  const handleClick = () => {
    runUpdate(taskDesc, selectedCategory, data.id);
  };

  const cloneTask = async () => {
    await createTask(data);
    const updatedTaskList: TaskEntity[] = await getTasks();
    setTasksData(updatedTaskList);
  };

  return (
    <div className={classes.taskContainer}>
      <input className={classes.check} type="checkbox" name="checkbox" />
      <Input
        name={taskDesc}
        value={taskDesc}
        onChange={handleTaskChange}
      ></Input>
      <Selection
        name={"category"}
        defaultValue={data.category}
        value={selectedCategory}
        onChange={handleCatChange}
      />
      <button className={classes.cloneBase} onClick={cloneTask}>
        <span className={classes.tooltip}>Clone Task</span>
        <img src={clone} className={classes.clone} />
      </button>

      <Button type="button" onClick={handleClick}>
        Update
      </Button>

      <Delete data={data} handleDeleteClick={handleDeleteClick} />
    </div>
  );
}
