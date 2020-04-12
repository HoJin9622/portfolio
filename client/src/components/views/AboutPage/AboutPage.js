import React from "react";

function AboutPage() {
  return (
    <div style={{ width: "60%", margin: "2rem auto" }}>
      <div style={{ textAlign: "center", fontSize: "2rem", fontWeight: "500" }}>
        ABOUT
      </div>
      <hr
        style={{
          width: "5%",
          height: "0.2rem",
          background: "black",
          marginTop: "0",
        }}
      />
      <br />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <div>{/*             <img /> */}</div>
          <div style={{ textAlign: "center" }}>Who's this guy?</div>
          <div>I'm Junior Web Developer for DEU in Busan</div>
        </div>

        <div>
          {/*           <img /> */}
          Language
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
