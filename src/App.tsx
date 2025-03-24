import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import Home from './components/Home';
import Hobbies from './components/Hobbies';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Login from './components/Login';
import Signup from './components/Signup';


function App() {
  const [isLoggedIn] = useState(false);

  return (
    <>
      <nav>
        <Link to="/" style={{paddingRight: "14px"}}>Home   </Link>
        <Link to="/Hobbies" style={{padding: "6px"}}>   Hobbies   </Link>
        <Link to="/Projects" style={{padding: "6px"}}>   Projects  </Link>
        {isLoggedIn ? (
        <Link to="/Resume" style={{paddingLeft: "10px"}}>   Resume</Link>
        ) : (
        <Link to="/Login" style={{paddingLeft: "10px"}}>   Login</Link>
        )}
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Hobbies" element={<Hobbies />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Resume" element={<Resume />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
      </Routes>
    </>
  )
}

export default App
