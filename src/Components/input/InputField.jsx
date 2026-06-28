import "./InputField.css";
function InputField({ handleTodo, toDoText }) {
  function handleInputChange(changeEvent) {
    handleTodo(changeEvent.target.value);
  }

  return (
    <div>
      <input
        className="todo-input"
        type="text"
        placeholder="Heute nichts zu tun?"
        onChange={handleInputChange}
        value={toDoText}
      ></input>
    </div>
  );
}

export default InputField;
