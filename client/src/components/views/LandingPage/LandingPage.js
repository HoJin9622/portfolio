import React from "react";
import "./LandingPage.css";

function LandingPage() {
  return (
    <div className="app" style={{ textAlign: "center" }}>
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
