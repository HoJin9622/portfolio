import React from "react";
import Banner from "./Section/Banner";
import Navigation from "./Section/Navigation";
import About from "./Section/About";
import Portfolio from "./Section/Portfolio";
import Contact from "./Section/Contact";
import Blog from "./Section/Blog";

function LandingPage() {
  return (
    <>
      <Banner />
      <Navigation />
      <About />
      <Portfolio />
      <Blog />
      <Contact />
    </>
  );
}

export default LandingPage;
