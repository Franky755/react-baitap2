
const Input = (props) => {
  return (
    <div>
      <span>{props.icon}</span>
      <input type={props.type} />
    </div>
  );
}

export default Input;
