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
  function toggleTodoComplete(id) {
    const updatedList = todoList.map((todo) => {
      if (todo.id === id) {
        return { ...todo, complete: !todo.complete };
      }
      return todo;
    });
    setTodoList(updatedList);
  }
  function addToDo() {
    const newToDoObj = {
      id: Date.now(),
      title: toDoText,
      complete: false,
    };

    setTodoList([...todoList, newToDoObj]);

    setToDoText("");
  }
  function deleteTodo(TodoId) {
    const newTodoArr = todoList.filter((todo) => todo.id !== TodoId);
    setTodoList(newTodoArr);
  }
  return (
    <div className="todo">
      <h1 className="todo__headline">Todo App React</h1>

      <div className="todo__header">
        <InputField handleTodo={handleTodo} toDoText={toDoText} />
        <Button btnTitle="Add" btnFunction={addToDo} id={"AddTodo"}></Button>
      </div>
      <div className="todo__main">
        {" "}
        {todoList.length === 0 ? (
          <p className="todo__placeholder">Heute nix los hier... </p>
        ) : (
          todoList.map((elm) => {
            return (
              <ToDoCard
                key={elm.id}
                todoObj={elm}
                todoArray={todoList}
                toggleTodoComplete={toggleTodoComplete}
                btnId={elm.id}
                deleteTodo={deleteTodo}
              ></ToDoCard>
            );
          })
        )}{" "}
      </div>
    </div>
  );
}
export default ToDo;
