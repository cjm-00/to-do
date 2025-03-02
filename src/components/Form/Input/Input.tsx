import { useState } from "react";
import classes from "./Input.module.scss";

export default function Input({ defaultValue }) {
  const [updatedValue, setValue] = useState(defaultValue);
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <input
      className={classes.input}
      defaultValue={updatedValue}
      onChange={handleChange}
    ></input>
  );
}
