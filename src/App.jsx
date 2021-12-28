import { useContext, useState } from "react";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Intro from "./components/introductory/Intro";
import Toggle from "./components/Toggle/Toggle";
import { ThemeContext } from "./context";
import Services from "./components/Services/Services";
import Skills from "./components/Skills/Skills";
import CvPart from "./components/CV/CvPart";

const App = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      style={{
        backgroundColor: darkMode ? "#222" : "white",
        color: darkMode && "white",
      }}
    >
      <Toggle />
      <Intro />
      <About />
      <Services />
      <Skills />
      <CvPart />
      <Contact />
    </div>
  );
};

export default App;
