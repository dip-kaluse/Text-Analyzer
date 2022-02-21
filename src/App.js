import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import TextBox from './component/TextBox';
import About from './component/About';


function App() {
  const [mode, setMode]=useState('light');
  const toggleMode=()=>{
    if(mode==='light')
    {
      setMode('dark'); 
      document.body.style.backgroundColor='grey' 
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white'
    }
  }
  return (
    <div className="App">
      <Navbar title="TextApp" about="About Us" mode={mode} toggleMode={toggleMode} />
      <div className="container">
      <TextBox textHeading="Enter The Text Analyze Below" mode={mode}/>
   
      </div>
    </div>
  );
}

export default App;
