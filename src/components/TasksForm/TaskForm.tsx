import { useEffect, useState } from "react";
import { getTasks } from "../../services/task-services";
import Button from "../Button/Button";
import Task from "../Task/Task";
import classes from "./TaskForm.module.scss";
import NewTaskForm from "../NewTaskForm/NewTaskForm";

export default function TaskForm() {
  const [tasksData, setTasksData] = useState([]);

  useEffect(() => {
    getTasks().then((data) => setTasksData(data));
  }, []);

  return (
    <div className={classes.formPage}>
      <div className={classes.tasksContainer}>
        {tasksData.map((task) => (
          <Task data={task} key={task.id} />
        ))}
        <div className={classes.buttonContainer}>
          <Button type={"submit"}>Confirm Changes</Button>
          <Button type={"button"}>Edit Categories</Button>
        </div>
      </div>
      <NewTaskForm tasksData={tasksData} />
    </div>
  );
}
