export const getCategories = async () => {
  const response = await fetch("http://localhost:8080/tasks/categories");
  const categoriesData = await response.json();
  if (!response.ok) {
    throw new Error("Problem retrieving categories from database :c");
  }
  return categoriesData;
};
