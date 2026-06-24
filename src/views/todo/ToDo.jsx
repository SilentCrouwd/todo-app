import "./ToDo.css";
import InputField from "../../Components/input/InputField";
import ToDoCard from "../todo/components/todoCard/ToDoCard";
import Button from "../../Components/button/Button";
import { useState } from "react";

function ToDo() {
  const [toDoList, setToDoList] = useState([]);

  const [toDoText, setToDoText] = useState("");
  function handleToDo(newToDoText) {
    setToDoText(newToDoText);
  }
  function addToDo() {
    console.log(toDoText);
    const newToDoObj = {
      id: toDoList.length,
      title: toDoText,
      complete: false,
    };

    setToDoList([...toDoList, newToDoObj]);
  }

  return (
    <div className="todo">
      <div className="todo__header">
        <InputField addToDo={handleToDo} />
        <Button btnTitle="Add" btnFunction={addToDo}></Button>
      </div>
      {toDoList.map((elm) => {
        return (
          <ToDoCard
            key={elm.id}
            id={elm.id}
            toDoText={elm.title}
            complete={elm.complete}
          ></ToDoCard>
        );
      })}{" "}
    </div>
  );
}
export default ToDo;
