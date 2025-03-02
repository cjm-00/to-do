import classes from "./Button.module.scss";

export default function Button({
  children,
  type,
}: {
  children: string;
  type: any;
}) {
  return (
    <button type={type} className={classes.button}>
      {children}
    </button>
  );
}
