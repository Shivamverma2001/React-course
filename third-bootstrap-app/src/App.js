import { useState } from 'react';
import './App.css';
import About from './modules/About';
import Navbar from './modules/Navbar';
import TextArea from './modules/TextArea';
import Alert from './modules/Alert';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [currentMode, newMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (currentMode === 'light') {
      newMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark Mode has been enabled", "success");
    } else {
      newMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled", "success");
    }
  };

  return (
    <Router>
      <Navbar title="Textutils" aboutText="About us" mode={currentMode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container">
        <Routes>
          <Route exact path="/about" element={<About />} />
          <Route exact path="/" element={<TextArea showAlert={showAlert} title="Enter your details here" mode={currentMode} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
