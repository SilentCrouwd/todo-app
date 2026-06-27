import { useState } from "react";
import "./InputField.css";
function InputField({ handleTodo, toDoText }) {
  const [inputValue, setInputValue] = useState("");

  function handleInputChange(changeEvent) {
    setInputValue(changeEvent.target.value);
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
