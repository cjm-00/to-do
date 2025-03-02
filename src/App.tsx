import "./App.scss";
import Button from "./components/Button/Button";
import Input from "./components/Form/Input/Input";
import Heading from "./components/Heading/Heading";
import TaskForm from "./components/TasksForm/TaskForm";

function App() {
  return (
    <>
      <Heading>To Do</Heading>
      <TaskForm />
    </>
  );
}

export default App;
