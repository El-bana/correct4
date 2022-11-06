import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import { Route, Router } from 'react-router-dom';
import Navbar from './components/nav/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
    </div>
  );
}

export default App;
