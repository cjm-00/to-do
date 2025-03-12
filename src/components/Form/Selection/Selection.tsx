import { useEffect, useState } from "react";
import { getCategories } from "../../../services/category-services";
import classes from "./Selection.module.scss";

export default function Selection({
  value,
  onChange,
  defaultValue,
  name,
}: {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  defaultValue: string;
  name: string;
}) {
  const [categoriesData, setCategoriesData] = useState<string[]>([]);

  useEffect(() => {
    getCategories().then((data) => setCategoriesData(data));
  }, []);

  return (
    <select
      className={classes.select}
      value={value}
      onChange={onChange}
      name={name}
    >
      {categoriesData.map((category) => (
        <option value={category} key={category}>
          {category.charAt(0).toUpperCase() + category.slice(1).toLowerCase()}
        </option>
      ))}
    </select>
  );
}
