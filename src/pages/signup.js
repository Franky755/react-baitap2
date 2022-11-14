import React from 'react';
import ReactDOM from 'react-dom';
import '../maincss/signup.css';

const SignUp = () => {

  return ReactDOM.createPortal(
    <div className='signup'>
      <div className='signup-content'>
        <h1>Sign-Up is successed, Babe!</h1>
        <br /><br /><br />
        <div>
          <img width='150px' src='https://haycafe.vn/wp-content/uploads/2022/03/anh-meme-gau-truc.jpg'></img>
        </div>
      </div>
    </div>,
    document.querySelector('body')
  )
}

export default SignUp















