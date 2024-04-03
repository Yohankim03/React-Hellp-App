import logo from './logo.svg';
import './App.css';

// src/App.js
import React from 'react';
import './App.css';
import SignupForm from './components/SignupForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SignupForm />
      </header>
    </div>
  );
}

export default App;

