import classes from "./heading.module.scss";

export default function Heading({ children }: { children: string }) {
  return (
    <div className={classes.header}>
      <h1 className={classes.heading}>{children}</h1>
    </div>
  );
}
