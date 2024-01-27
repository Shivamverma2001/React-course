import { useState } from 'react';
import './App.css';
// import About from './modules/About';
import Navbar from './modules/Navbar';
import TextArea from './modules/TextArea';
import Alert from './modules/Alert';

function App() {
  const [currentMode, newMode] = useState('light'); // whether dark mode is enabled or not
  const [alert, setAlert]=useState(null);
  
  const showAlert=(message,type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }
  const toggleMode=()=>{
    if(currentMode=='light'){
      newMode('dark');
      document.body.style.backgroundColor='grey';
      showAlert("Dark Mode has been enabled","success");
    }else{
      newMode('light')
      document.body.style.backgroundColor='white';
      showAlert("Light Mode has been enabled","success");
    }
  }
  return (
    <>
    <Navbar title="Textutils" aboutText="About us" mode={currentMode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    {/* <Navbar/> */}
    <div className="container">
        <TextArea showAlert={showAlert} title="Enter your details here" mode={currentMode}/>
        {/* <About></About> */}
    </div>
    </>
  );
}

export default App;
