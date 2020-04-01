import React from "react";
import "./LandingPage.css";

function LandingPage() {
  const buttons = document.querySelectorAll(".viewMyWork");

  buttons.forEach(btn => {
    // 마우스가 클릭한 지점에서부터 ripples 이 발생하지 않는 문제
    btn.addEventListener("click", function(e) {
      let x = e.clientX - e.targetoffsetLeft;
      let y = e.clientY - e.targetoffsetTop;

      let ripples = document.createElement("span");
      ripples.className = "ripples";
      ripples.style.left = x + "px";
      ripples.style.top = y + "px";
      this.appendChild(ripples);

      setTimeout(() => {
        ripples.remove();
      }, 1000);
    });
  });

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
