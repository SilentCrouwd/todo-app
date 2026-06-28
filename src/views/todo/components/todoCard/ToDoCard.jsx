import Button from "../../../../Components/button/Button";
import Checkbox from "../../../../Components/checkbox/Checkbox";
import "./ToDoCard.css";

function ToDoCard({ todoObj, deleteTodo, toggleTodoComplete }) {
  return (
    <div className="todo-card">
      <Checkbox
        todoObj={todoObj}
        handleCheckboxChange={() => {
          toggleTodoComplete(todoObj.id);
        }}
      />
      <p
        className={`todo-card__text ${todoObj.complete ? "todo-complete" : ""}`}
      >
        {todoObj.title}
      </p>
      <Button
        className="btn btn__delete"
        btnTitle={"Löschen"}
        btnFunction={() => deleteTodo(todoObj.id)}
      ></Button>
    </div>
  );
}
export default ToDoCard;
