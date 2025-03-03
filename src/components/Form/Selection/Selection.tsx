import classes from "./Selection.module.scss";

export default function Selection({ defaultValue }: { defaultValue: any }) {
  return (
    <select className={classes.select} defaultValue={defaultValue}>
      <option value={"Cleaning"}>Cleaning</option>
      <option value={"Projects"}>Projects</option>
      <option value={"Codewars"}>Codewars</option>
      <option value={"Warhammer"}>Warhammer</option>
    </select>
  );
}
