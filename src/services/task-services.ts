export const getTasks = async () => {
  const response = await fetch("http://localhost:8080/tasks");
  const tasksData = await response.json();
  if (!response.ok) {
    throw new Error("Problem retrieving task list :c");
  }
  return tasksData;
};
