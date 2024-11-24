import './App.css'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import { Routes, Route } from 'react-router-dom';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Education from './Components/Education';

function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/skills" element={<Skills/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/education" element={<Education/>}/>
      </Routes>
    </>
  )
}

export default App
