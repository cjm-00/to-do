import { useEffect, useState } from "react";
import { getTasks } from "../../services/task-services";
import Button from "../Button/Button";
import Task from "../Task/Task";
import classes from "./TaskForm.module.scss";
import Selection from "../Form/Selection/Selection";

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

      <form className={classes.newTask}>
        <input
          defaultValue={"Type Here..."}
          className={classes.newTextInput}
        ></input>
        <Selection defaultValue={"Cleaning"}></Selection>
        <Button type={"submit"}>Add Task</Button>
      </form>
    </div>
  );
}
