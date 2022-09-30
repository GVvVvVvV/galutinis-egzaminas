const Button = ({ text, action, userId }) => {
  return (
    <button onClick={action} data-user-id={userId}>
      {text}
    </button>
  );
};

export default Button;
