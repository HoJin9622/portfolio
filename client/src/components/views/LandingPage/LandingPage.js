import React from "react";
import Banner from "./Section/Banner";

function LandingPage() {
  return (
    <div className="app" style={{ textAlign: "center" }}>
      <Banner />
      <div style={{ fontSize: "2rem" }}>Hello, I'm HoJin Lee.</div>
      <div style={{ fontSize: "2rem" }}>I'm a junior web developer.</div>
      <div>
        <a href="/about" className="viewMyWork">
          View my work
        </a>
      </div>
    </div>
  );
}

export default LandingPage;
