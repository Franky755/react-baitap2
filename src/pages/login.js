import { useState } from "react";
import Input from "../components/Input";
import login from '../maincss/login.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";


function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmPassword] = useState('');

  const handleChangeEmail = (event) => {
    setEmail(event.target.value)
  }
  const handleChangePassword = (event) => {
    setPassword(event.target.value)
  }
  const handleConfirmPassword = (event) => {
    setConfirmPassword(event.target.value)
  }

  const handleOnSubmit = (event) => {
    if (email.length === 0) {
      alert("Please input your email! >_< ");
    }
    else if (password.length < 5) {
      alert("Password must be more than 5 digits >>__<< ");
    }
    else if (password !== confirmpassword) {
      alert("The password does not matched! =))) ");
    }
    else {
      alert("Login is sucessed! :) ");
    }
  }


  return (
    <div className="container">
      <div className="form">
        <div className="left-content">
          <img className='avatar' src="http://media.vov.vn/sites/default/files/styles/large/public/2022-08/anh-nen-avatar-dep_652403.jpg"
            alt="avatar" ></img>
        </div>
        <div className="right-content">
          <h2>Sign Up Form</h2>
          <br />
          <Input
            value={email}
            type="text"
            icon={<FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>}
            label="Email: "
            placeholder="Type your email"
            onChange={handleChangeEmail}
            required />

          <Input
            value={password }
            type="password"
            icon={<FontAwesomeIcon icon={faLock}></FontAwesomeIcon>}
            label="Password: "
            placeholder="Your password"
            onChange={handleChangePassword}
            required />

          <Input
            value={confirmpassword }
            type="password"
            icon={<FontAwesomeIcon icon={faLock}></FontAwesomeIcon>}
            label="Confirm your password: "
            placeholder="Confirm the password"
            confirmpassword=""
            onChange={handleConfirmPassword}
            required />

          <br />
          <button className="login" onClick={handleOnSubmit}>Sign Up</button>
          <br />
          <a href="">Forgot Username/</a> <a href=""> Password?</a>
        </div>
      </div>
    </div>
  );
}

export default Login;
