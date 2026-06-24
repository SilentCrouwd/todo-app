import Button from "../../../../Components/button/Button";
import "./ToDoCard.css";
function ToDoCard({ toDoText, id, complete }) {
  return (
    <div className="todo-card" data-id={id}>
      <input
        className="todo-card__checkbox"
        type="checkbox"
        checked={complete}
      ></input>
      <p className="todo-card__text">{toDoText}</p>
      <Button className="btn btn__delete" btnTitle={"Löschen"}></Button>
    </div>
  );
}
export default ToDoCard;
