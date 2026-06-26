import "./ToDo.css";
import InputField from "../../Components/input/InputField";
import ToDoCard from "../todo/components/todoCard/ToDoCard";
import Button from "../../Components/button/Button";
import { useState } from "react";

function ToDo() {
  const [todoList, setTodoList] = useState([]);
  // const [checked, setChecked] = useState(false);
  const [toDoText, setToDoText] = useState("");
  function handleTodo(newToDoText) {
    setToDoText(newToDoText);
  }

  function addToDo() {
    const newToDoObj = {
      id: todoList.length,
      title: toDoText,
      complete: false,
    };

    setTodoList([...todoList, newToDoObj]);

    setToDoText("");
  }
  function handleCheckState(newTodoArr) {
    setTodoList(newTodoArr);
  }

  return (
    <div className="todo">
      <div className="todo__header">
        <InputField handleTodo={handleTodo} toDoText={toDoText} />
        <Button btnTitle="Add" btnFunction={addToDo} id={"AddTodo"}></Button>
      </div>
      {todoList.map((elm) => {
        return (
          <ToDoCard
            key={elm.id}
            todoObj={elm}
            todoArray={todoList}
            handleCheckState={handleCheckState}
          ></ToDoCard>
        );
      })}{" "}
    </div>
  );
}
export default ToDo;
