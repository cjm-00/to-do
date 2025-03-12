import { useEffect, useState } from "react";
import { getTasks, TaskEntity, updateTask } from "../../services/task-services";
import Task from "../Task/Task";
import classes from "./TaskForm.module.scss";
import NewTaskForm from "../NewTaskForm/NewTaskForm";

export default function TaskForm() {
  const [tasksData, setTasksData] = useState<TaskEntity[]>([]);

  const runUpdate = async (
    updatedTaskDesc: string,
    updatedTaskCat: string,
    id: number
  ) => {
    const data = { task: updatedTaskDesc, category: updatedTaskCat };
    await updateTask(id, data);
    const updatedTaskList = await getTasks();
    setTasksData(updatedTaskList);
  };

  useEffect(() => {
    getTasks().then((data) => setTasksData(data));
  }, []);

  return (
    <div className={classes.formPage}>
      <div className={classes.tasksContainer}>
        {tasksData.map((task) => (
          <Task
            data={task}
            key={task.id}
            runUpdate={runUpdate}
            setTasksData={setTasksData}
          />
        ))}
      </div>
      <NewTaskForm tasksData={tasksData} setTasksData={setTasksData} />
    </div>
  );
}
