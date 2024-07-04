import logo from "./logo.svg";
import "./App.css";
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React,{useState} from 'react'
import Alert from "./Components/Alert";
// import About from './Components/About';
function App() {

  const togglemode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor="#042743";
      showAlert("Dark Mode Activated","success")
      document.title='TextUtils-Dark Mode'
    }
    else{
      setMode('light');
      document.body.style.backgroundColor="white";
      showAlert("Light Mode Activated","success");
      document.title='TextUtils-Lightf Mode'
    }
  }
  const [mode,setMode] = useState('light')

  const [alert,setAlert] = useState(null)

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
      })
      setTimeout(() => {
        setAlert(null)
      }, 2000);
  }

  return ( 
    <>
      
      <Navbar title="TextBox" aboutc="About TextBox" mode={mode} toggleMode={togglemode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
      <TextForm showAlert={showAlert} heading="Enter your text here" mode={mode} showAlert={showAlert}/>
      {/* <About/> */}
      </div>
    </>
  );
}

export default App;