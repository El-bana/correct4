import React from 'react';
import './App.css';
import { Route, Routes, useMatch } from 'react-router-dom';
import Navbar from './components/nav/Navbar';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Login from './pages/Forms/Login/Login';
import Register from './pages/Forms/Register/Register';
import { useLocation } from 'react-router-dom';
import clsx from 'clsx'
import Classes from './pages/Classes/Classes';
import Class from './pages/Classes/Class/Class';
import Exam from './pages/Classes/Exam/Exam';

function App() {
  const location = useLocation();
  const matchExam = useMatch('/classes/:classId/:examId')
  const isHolyGrid = () => {
    const paths = ['/login', '/register', '/']
    console.log(location.pathname)
    return paths.includes(location.pathname) || matchExam
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
        <Route path='/classes/:classId/' element={<Class />} />
        <Route path='/classes/:classId/:examId' element={<Exam />} />
      </Routes>
    </div>
  );
}

export default App;
