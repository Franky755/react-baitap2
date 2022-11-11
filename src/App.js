import ThemeContext from './context/ThemeConext';
import Login from './pages/login';
import { useState } from 'react';
import './App.css'


function App() {

  const [theme, setTheme] = useState ('dark')

  const handleChangeTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <ThemeContext.Provider value={theme}>
    <div className="App">
      <button className='btn-change-theme' onClick={handleChangeTheme}> Change Background </button>
      <Login  />
    </div>
    </ThemeContext.Provider>
  );
}

export default App;
