import Button from "../../../../Components/button/Button";
import Checkbox from "../../../../Components/checkbox/Checkbox";
import "./ToDoCard.css";

function ToDoCard({ todoObj, todoArray, handleCheckState }) {
  function handleCheckboxChange(selectedTodo) {
    const newSelectedTodo = { ...selectedTodo };
    const newTodoList = todoArray.map((todo) => {
      if (todo.id === newSelectedTodo.id) {
        return { ...todo, complete: !todo.complete };
      }
      return todo;
    });
    handleCheckState(newTodoList);
  }

  return (
    <div className="todo-card" data-id={todoObj.id}>
      <Checkbox todoObj={todoObj} handleCheckboxChange={handleCheckboxChange} />
      <p className="todo-card__text">{todoObj.title}</p>
      <Button className="btn btn__delete" btnTitle={"Löschen"}></Button>
    </div>
  );
}
export default ToDoCard;
