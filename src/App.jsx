import "./App.css";
import AboutMe from "./components/AboutMe";
import DarkModeBar from "./components/DarkModeBar";
import NavBar from "./components/NavBar";
import Skills from "./components/Skills";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState("tr");

  useEffect(() => {
    const savedDarkMode = localStorage.getItem("darkMode");
    const savedLanguage = localStorage.getItem("language");

    if (savedDarkMode !== null) {
      setDarkMode(JSON.parse(savedDarkMode));
    }

    if (savedLanguage) {
      setLanguage(savedLanguage); 
    }
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem("darkMode", JSON.stringify(newDarkMode)); 
  };

  const changeLanguage = (newLanguage) => {
    setLanguage(newLanguage);
    localStorage.setItem("language", newLanguage); // Kaydet
  };

  return (
    <div className={`${darkMode ? "bg-black text-white" : ""}`}>
      <ToastContainer />
      <DarkModeBar
        className="dark:bg-black"
        toggleDarkMode={toggleDarkMode}
        darkMode={darkMode}
        language={language}
        setLanguage={changeLanguage}
      />
      <NavBar darkMode={darkMode} language={language} />
      <AboutMe darkMode={darkMode} language={language} />
      <Skills darkMode={darkMode} language={language} />
      <Profile darkMode={darkMode} language={language} />
      <Projects darkMode={darkMode} language={language} />
      <Footer darkMode={darkMode} language={language} />
    </div>
  );
}

export default App;
