import classes from "./Button.module.scss";

export default function Button({
  children,
  type,
  onClick,
}: {
  children: string;
  type: any;
  onClick: any;
}) {
  return (
    <button type={type} className={classes.button} onClick={onClick}>
      {children}
    </button>
  );
}
