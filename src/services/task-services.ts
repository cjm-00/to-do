// export const getTasks = async () => {
//   const response = await fetch("http://localhost:8080/tasks");
//   const tasksData = await response.json();
//   if (!response.ok) {
//     throw new Error("Problem retrieving task list :c");
//   }
//   return tasksData;
// };

export const getTasks = async () => {
  const response = await fetch("http://localhost:3000/tasks");
  const tasksData = await response.json();
  if (!response.ok) {
    throw new Error("Problem retrieving task list from database :c");
  }
  return tasksData;
};

export const createTask = async (data) => {
  const response = await fetch("http://localhost:3000/tasks", {
    method: "POST",
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    throw new Error("Cannot create task");
  }
  return await response.json();
};
