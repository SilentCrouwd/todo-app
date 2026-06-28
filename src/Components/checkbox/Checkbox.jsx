function Checkbox({ todoObj, handleCheckboxChange }) {
  return (
    <input
      id={todoObj.id}
      type="checkbox"
      aria-label={`Checkbox für To-Do: ${todoObj.title}`}
      checked={todoObj.complete}
      onChange={() => {
        handleCheckboxChange(todoObj);
      }}
    ></input>
  );
}
export default Checkbox;
