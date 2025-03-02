import Button from "../Button/Button";
import Delete from "../Delete/Delete";
import Input from "../Form/Input/Input";
import Selection from "../Form/Selection/Selection";
import classes from "./Task.module.scss";
import clone from "../../assets/clone-solid.svg";

export default function Task({ data }) {
  return (
    <div className={classes.taskContainer}>
      <input className={classes.check} type="checkbox" />
      <Input defaultValue={data.task}></Input>
      <Selection defaultValue={data.category} />

      <img src={clone} className={classes.clone} />

      <Delete />
    </div>
  );
}
