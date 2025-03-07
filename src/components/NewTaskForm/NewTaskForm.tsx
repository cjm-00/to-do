import classes from "./NewTaskForm.module.scss";
import Button from "../Button/Button";
import Selection from "../Form/Selection/Selection";
import Input from "../Form/Input/Input";

export default function NewTaskForm({ tasksData }) {
    const appendTask = () => {
        
    }
  return (
    <form className={classes.newTask} onSubmit={appendTask}>
      <Input defaultValue={"Type Here..."}></Input>
      <Selection defaultValue={"Cleaning"}></Selection>
      <Button type={"submit"}>Add Task</Button>
    </form>
  );
}
