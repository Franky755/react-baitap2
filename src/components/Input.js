import '../maincss/input.css';

const Input = (props) => {
  return (
    <div className='input-container'>
      <span className='icon'>{props.icon}</span>
      <label className='label'>{props.label}</label>
      <input
      type={props.type}
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange}
      required={props.required}
      confirmpassword={props.confirmpassword}
      autoFocus={props.autoFocus}/>
    </div>
  );
}

export default Input;
