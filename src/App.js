import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import { Home } from "./Pages/Home"
import { Navbar } from "./components/Navbar";
import { About } from "./Pages/About";
import { Projects } from "./Pages/Projects";
import { Skills } from "./Pages/Skills";
import { Contact } from "./Pages/Contact";
import { SocialIcon } from "./components/SocialIcon";
import Gitcalender from "./Pages/Gitcalender";

export default function App() {
  return (
    <div className="App">
      <ChakraProvider>
        <Navbar />
        <Home />
        <About />
        <Skills />
        <Projects />
        <Gitcalender />
        <Contact />
      </ChakraProvider>
      <SocialIcon />
    </div>
  );
}
