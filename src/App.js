import About from "./components/About";
import Header from "./components/Header";
import "./App.css";
import React, { useState, useEffect } from "react";
import Footer from "./components/Footer";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";
import Contact from "./components/Contact";

function App() {
  //'about', 'portfolio', 'contact', 'resume'
  const [selectedPage, setSelectedPage] = useState("contact");
  useEffect(() => {
    document.title = `Todd Bauer - ${selectedPage}`;
  }, [selectedPage]);

  return (
    <>
      <Header
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      ></Header>

      {selectedPage === "about" && <About />}
      {selectedPage === "resume" && <Resume />}
      {selectedPage === "portfolio" && <Portfolio />}
      {selectedPage === "contact" && <Contact />}

      <Footer />
    </>
  );
}

export default App;
