import { useState } from "react";
import "./InputField.css";
function InputField({ addToDo }) {
  const [inputValue, setInputValue] = useState("");

  function handleInputChange(changeEvent) {
    setInputValue(changeEvent.target.value);
  }
  addToDo(inputValue);
  
  return (
    <div>
      <input
        className="todo-input"
        type="text"
        onChange={handleInputChange}
      ></input>
    </div>
  );
}

export default InputField;
