import { Navbar } from "./Components/Navbar";
import Contact from "./Pages/Contact";
import Skills from "./Pages/Skills";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import Top from "./Components/Top";
import { GitHubCalender } from "./Pages/GithubCalender";
import { SocialIcon } from "./Components/SocialIcon/SocialIcon";
import "./App.css";
function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <GitHubCalender />
      <Contact />
      <Top />
      <SocialIcon />
    </>
  );
}

export default App;
