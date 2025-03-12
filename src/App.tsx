import "./App.module.scss";
import Button from "./components/Button/Button";
import Input from "./components/Form/Input/Input";
import Heading from "./components/Heading/Heading";
import TaskForm from "./components/TasksForm/TaskForm";
import check from "../src/assets/check.svg";
import classes from "./App.module.scss";

function App() {
  return (
    <>
      <Heading>
        <img src={check} className={classes.check} />
        To Do
      </Heading>

      <TaskForm />
    </>
  );
}

export default App;
