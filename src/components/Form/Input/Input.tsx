import classes from "./Input.module.scss";

export default function Input({
  name,
  onChange,
  value,
}: {
  name: string;
  onChange: any;
  value: string;
}) {
  return (
    <input
      name={name}
      value={value}
      className={classes.input}
      onChange={onChange}
    />
  );
}
