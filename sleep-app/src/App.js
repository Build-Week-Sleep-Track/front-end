import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Link, useHistory } from 'react-router-dom';
import Registration from './components/Registraton';

function App() {
  return (
    <div className="App">
    <h1> 
      Hello world
    </h1>
    <Registration/>
    </div>
  );
}

export default App;
