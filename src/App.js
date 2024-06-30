import React from 'react';
import Navbar from './Components/navbar';
import './App.css';
import './Pages/Login/login.css'
import Home from './Pages/HomePage.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Pages/Login/login';
import Signup from './Pages/SignUp/Signup';
import Games from './Pages/Games/Games';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/games' element={<Games />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;