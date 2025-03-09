import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Hobbies from './Hobbies';
import Home from './Home';
import Projects from './Projects';


function App() {

  return (
    <>
      <nav>
        <Link to="/">Home  </Link>
        <Link to="/Hobbies">  Hobbies  </Link>
        <Link to="/Projects">  Projects</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Hobbies" element={<Hobbies />} />
        <Route path="/Projects" element={<Projects />} />
      </Routes>
    </>
  )
}

export default App
