import './App.css';
import React, { useState, useSyncExternalStore } from 'react';
import Navbar from './components/Navbar';
import Alerts from './components/Alerts';
import Textform from './components/Textform';
import About from './components/About';
import {
  Routes,
  Route,
} from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light')
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#042743'
      showAlert("Dark Mode has been enabled", "success")
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light Mode has been enabled","success")
    }
  }
  const [alert, setAlert] = useState(null)
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);
    }, 1000);
  }
  return (
    <>
    
        <Navbar title="TextUtils" about="About Us" mode={mode} toggleMode={toggleMode}/>
        <Alerts alert={alert}/>
        <div className="container my-5">
        <Routes>
          <Route path="/about" element={<About mode={mode}/>} />
          <Route path="/" element={<Textform showAlert={showAlert} heading='Try TextUtils - Word Counter, Character Counter, Remove extra spaces' mode={mode}/>} /> 
          {/* {<Textform showAlert={showAlert} heading='Try TextUtils - Word Counter, Character Counter, Remove extra spaces' mode={mode}/>} */}
        </Routes>
        </div>
        
    </>
  );
  }

export default App;
