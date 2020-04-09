import React from "react";
import "./TestPage2.css";

function TestPage2() {
  return (
    <div>
      <header>
        <a href="#" className="logo">
          <img src="/images/TestPage2/logo.png" />
        </a>
        <div className="toggle">
          <img src="/images/TestPage2/toggle.png" />
        </div>
      </header>
      <div className="banner">
        <div className="content">
          <h2>
            Put on a <span>Happy</span> face
          </h2>
          <p>
            At Success by Design, we understand how important it is for
            educators to find the right tools for student success. When it comes
            to buying materials in bulk, teachers and campus administrators feel
            the weight of that responsibility twice over. No one wants to spend
            their limited resources on a product their students are just going
            to set aside.
          </p>
          <a href="#" className="play">
            <img src="/images/TestPage2/play.png" /> Watch Trailer
          </a>
          <div className="slide"></div>
          <ul>
            <li>
              <a href="#">
                <img src="/images/TestPage2/facebook.png" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="/images/TestPage2/twitter.png" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="/images/TestPage2/instagram.png" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default TestPage2;
