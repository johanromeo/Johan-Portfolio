import "./Button.css";

const Button = ({ handleClick, text }) => {
  return (
    <button className="generic-button" onClick={handleClick}>
      {text}
    </button>
  );
};

export default Button;
