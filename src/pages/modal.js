import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import '../maincss/modal.css'

const Modal = ({ children, setIsOpenModal }) => {



  const handleOnClickOk = (event) => {
    setIsOpenModal(false)
    alert('Login is sucessed! :)')
  }

  const handleonClickNo = (event) => {
    setIsOpenModal(false)
  }

  return (
    <div className='modal-container'>
      <div className='modal-content'>
        <h1 className='modal-title'>Confirm Registration</h1>
        <p className='modal-question'>You wanna join our Crew, isn't it? <br/><br/>
          <img src='https://www.pngkey.com/png/detail/439-4396775_rare-pepe-png.png' width='50px' alt='meme'></img>
          <img src='https://www.pngkey.com/png/detail/439-4396775_rare-pepe-png.png' width='50px' alt='meme'></img>
          <img src='https://www.pngkey.com/png/detail/439-4396775_rare-pepe-png.png' width='50px' alt='meme'></img>
        </p>
        <button className='btn-modal btn-ok' onClick={handleOnClickOk}>OK, Babe!~</button>
        <button className='btn-modal btn-no' onClick={handleonClickNo}>Sorry Babe!~</button>
      <br/>
      <div className='hehe'>
      <img alt='hihi' src='http://store-images.microsoft.com/image/apps.59682.9007199266251377.11eabd37-a0d4-4a98-a6dc-6cd4ec6a02e3.33ff95a5-12b9-4036-9843-957c1b44cdd8'></img>
      </div>
      </div>
    </div>
  )
}

export default Modal
