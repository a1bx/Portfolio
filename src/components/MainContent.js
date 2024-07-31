// MainContent.js
import React from "react";
import About from "./About";
import Contact from "./Contact";
import Experience from "./Experience";
import Home from "./Home";
import NavBar from "./NavBar";
import Portfolio from "./myWork";
import SocialLinks from "./SocialLinks";

function MainContent() {
  return (
    <div className="">
      <NavBar />
      <Home />
      <About />
      <Portfolio />
      <Experience />
      <Contact />
      <SocialLinks />
    </div>
  );
}

export default MainContent;