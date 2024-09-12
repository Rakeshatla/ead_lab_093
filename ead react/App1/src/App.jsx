// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
import { useState } from 'react';
import Timer from './components/Timer';
import PasswordStrengthChecker from './components/password';
import './App.css';

function App() {
  const [activeComponent, setActiveComponent] = useState(null);

  return (
    <div className="App">
      <div className="buttons">
        <button onClick={() => setActiveComponent('timer')}>Show Timer</button>
        <button onClick={() => setActiveComponent('passwordChecker')}>Show Password Checker</button>
      </div>

      <div className="component-container">
        {activeComponent === 'timer' && <Timer />}
        {activeComponent === 'passwordChecker' && <PasswordStrengthChecker />}
      </div>
    </div>
  );
}
export default App;