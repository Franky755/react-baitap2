import { useState } from "react";
import Input from "./components/Input";

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="form">
      <div className="left-content">
        <img src=''></img>
      </div>
      <div className="right-content">
        USER LOGIN
        <Input value={email} type="text" icon="" label="" onChange={() => {}} />
        <Input value={password} type="password" icon="" label="" onChange={() => {}} />
      </div>
    </div>
  );
}

export default Login;
