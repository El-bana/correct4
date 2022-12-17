import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/nav/Navbar';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Login from './pages/Forms/Login/Login';
import Register from './pages/Forms/Register/Register';
import { useLocation } from 'react-router-dom';
import clsx from 'clsx'
import Classes from './pages/Classes/Classes';

function App() {
  const location = useLocation();
  const isHolyGrid = () => {
    const paths = ['/login', '/register', '/']
    console.log(location.pathname)
    return paths.includes(location.pathname)
  }

  return (
    <div className={clsx('App', {
      'holyGrid': isHolyGrid()
    })}>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about-us' element={<About />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/classes' element={<Classes />} />
      </Routes>
    </div>
  );
}

export default App;
