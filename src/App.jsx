import './App.css'
import AboutMe from './components/AboutMe'
import DarkModeBar from "./components/DarkModeBar"
import NavBar from './components/NavBar'
import Skills from './components/Skills'
import Profile from './components/Profile'
import Projects from './components/Projects'
import Footer from './components/Footer'
import { useState } from "react";


function App() {

  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  


  return (
    <div className={`${darkMode ? 'bg-black text-white' : ''}`}>
      <DarkModeBar className= "dark:bg-black" toggleDarkMode={toggleDarkMode} darkMode = {darkMode}/>
      <NavBar  darkMode = {darkMode}/>
      <AboutMe darkMode = {darkMode}/>
      <Skills darkMode = {darkMode}/>
      <Profile darkMode = {darkMode}/>
      <Projects/>
      <Footer darkMode = {darkMode}/>
      
    </div>
    
  )
}

export default App
