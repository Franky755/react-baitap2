import ThemeContext from './context/ThemeConext';
import Login from './pages/login';
import { useState } from 'react';
import './App.css'
import Modal from './pages/modal';
import SignUp from './pages/signup';


function App() {
  const [isOpenModal, setIsOpenModal] = useState(false)
  const [isLoginSuccess, setIsLoginSuccess] = useState(false)
  const [theme, setTheme] = useState('dark')

  const handleChangeTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <>
      <ThemeContext.Provider value={theme}>
        <div className="App">
          <button className='btn-change-theme' onClick={handleChangeTheme}> Change Background </button>
          <Login setIsOpenModal={setIsOpenModal} />
        </div>
      {isOpenModal &&
        <div id="modal">
          <Modal setIsOpenModal={setIsOpenModal} setIsLoginSuccess={setIsLoginSuccess} />
        </div>
      }
      {isLoginSuccess &&
        <div id='sign-up-success'>
          <SignUp />
        </div>
      }

      </ThemeContext.Provider>

    </>

  );
}

export default App;
