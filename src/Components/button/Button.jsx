import "./Button.css";
function Button({ btnTitle, className = "btn", btnFunction }) {
  return (
    <button type="button" className={className} onClick={btnFunction}>
      {btnTitle}
    </button>
  );
}

export default Button;
