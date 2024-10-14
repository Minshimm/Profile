import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Contact from './Component/Contact/Contact'
import Footer from './Component/Footer/Footer'
import Header from './Component/Header/Header'
import Home from './Component/Home/Home'
import Projects from './Component/Projects/Projects'
import Errorpage from './Component/Errorpage';

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);


  return (
    <>
     <Header theme={theme} toggleTheme={toggleTheme}/>
     <Routes>
       <Route path='/' element={ <Home theme={theme}/>}/>
       <Route path='/projects' element={<Projects theme={theme}/>} />
       <Route path='/contact' element={ <Contact theme={theme}/>}/>
       <Route path='/*' element={<Errorpage/>}/>
     </Routes>
    
     
     <Footer theme={theme}/>
    </>
  )
}

export default App
