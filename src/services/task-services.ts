export const getTasks = async () => {
  const response = await fetch("http://localhost:3000/tasks");
  const tasksData = await response.json();
  if (!response.ok) {
    throw new Error("Problem retrieving task list :c");
  }
  return tasksData;
};

export const createTask = async (data) => {
  const response = await fetch("http://localhost:3000/tasks", {
    method: "POST",
    body: JSON.stringify(data),
  });
  const tasksData = await response.json();
  if (!response.ok) {
    throw new Error("Problem creating task");
  }
  return tasksData;
};
