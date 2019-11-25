import React from 'react';
import logo from './mss.png';
import './App.css';
import Sidebar from './teste';
import "./index.css";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Sidebar/>
      </header>

      <nav class="navbar fixed-bottom navbar-light bg-light">
      <div class="navbar-center">
        <a target="_blank" class="navbar-brand" href="https://github.com/msousadev/">
    
           <small>Copyright &copy; Matheus Silva</small>



        </a>
        </div>
      </nav>

    </div>
  );
}

export default App;
