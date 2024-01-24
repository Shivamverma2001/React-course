import './App.css';
import Navbar from './modules/Navbar';
import TextArea from './modules/TextArea';

function App() {
  return (
    <>
    <Navbar title="Textutils" aboutText="About us"/>
    {/* <Navbar/> */}
    <div className="container">
      
        <TextArea title="Enter your details here"/>
    </div>
    </>
  );
}

export default App;
