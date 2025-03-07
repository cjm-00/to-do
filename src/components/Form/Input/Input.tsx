import { useEffect, useState } from "react";
import classes from "./Input.module.scss";

export default function Input({ defaultValue }) {
  const [updatedValue, setValue] = useState(defaultValue);
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  useEffect(() => {
    console.log(updatedValue);
  }, [updatedValue]);

  return (
    <input
      className={classes.input}
      defaultValue={updatedValue}
      onChange={handleChange}
    ></input>
  );
}
