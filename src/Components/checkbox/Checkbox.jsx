function Checkbox({ todoObj, handleCheckboxChange }) {
  return (
    <input
      id={todoObj.id}
      type="checkbox"
      checked={todoObj.complete}
      onChange={(event) => {
        handleCheckboxChange(todoObj);
      }}
    ></input>
  );
}
export default Checkbox;
