import "./Button.css";
function Button({ btnTitle, btnFunction }) {
  return (
    <button className="btn" onClick={btnFunction}>
      {btnTitle}
    </button>
  );
}

export default Button;
