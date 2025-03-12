import { archiveTask, TaskEntity } from "../../services/task-services";
import classes from "./Delete.module.scss";

export default function Delete({
  handleDeleteClick,
  data,
}: {
  handleDeleteClick: () => {};
  data: TaskEntity;
}) {
  return (
    <button
      className={classes.delete}
      name={"deleteBtn"}
      onClick={handleDeleteClick}
    >
      X
    </button>
  );
}
