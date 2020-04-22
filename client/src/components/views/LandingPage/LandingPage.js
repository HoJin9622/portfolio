import React from "react";
import Banner from "./Section/Banner";
import Navigation from "./Section/Navigation";
import About from "./Section/About";
import Portfolio from "./Section/Portfolio";

function LandingPage() {
  return (
    <>
      <Banner />
      <Navigation />
      <About />
      <Portfolio />
    </>
  );
}

export default LandingPage;
