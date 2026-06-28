import "./ToDo.css";
import InputField from "../../Components/input/InputField";
import ToDoCard from "../todo/components/todoCard/ToDoCard";
import Button from "../../Components/button/Button";
import { useState } from "react";

function ToDo() {
  const [todoList, setTodoList] = useState([]);

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
  function deleteTodo(TodoId) {
    const newTodoArr = todoList.filter((todo) => todo.id !== TodoId);
    setTodoList(newTodoArr);
  }
  return (
    <div className="todo">
      <h1 className="todo__headline">Todo App test32 React</h1>

      <div className="todo__header">
        <InputField handleTodo={handleTodo} toDoText={toDoText} />
        <Button btnTitle="Add" btnFunction={addToDo} id={"AddTodo"}></Button>
      </div>
      <div className="todo__main">
        {" "}
        {todoList.map((elm) => {
          return (
            <ToDoCard
              key={elm.id}
              todoObj={elm}
              todoArray={todoList}
              handleCheckState={handleCheckState}
              btnId={elm.id}
              deleteTodo={deleteTodo}
            ></ToDoCard>
          );
        })}{" "}
      </div>
    </div>
  );
}
export default ToDo;
