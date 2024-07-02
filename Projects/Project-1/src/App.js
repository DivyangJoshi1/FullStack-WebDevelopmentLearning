import logo from "./logo.svg";
import "./App.css";
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React,{useState} from 'react'
// import About from './Components/About';
function App() {

  const togglemode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor="#042743";
    }
    else{
      setMode('light');
      document.body.style.backgroundColor="white";
    }
  }
  const [mode,setMode] = useState('light')
  return ( 
    <>
      
      <Navbar title="TextBox" aboutc="About TextBox" mode={mode} toggleMode={togglemode}/>
      <div className="container my-3">
      <TextForm heading="Enter your text here" mode={mode}/>
      {/* <About/> */}
      </div>
    </>
  );
}

export default App;
