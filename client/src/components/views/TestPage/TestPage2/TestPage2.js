import React, { useState, useEffect } from "react";
import "./TestPage2.css";

function TestPage2() {
  const [openTrailer, setopenTrailer] = useState(false);

  useEffect(() => {
    const video = document.querySelector("video");

    if (openTrailer) {
      video.play();
    } else {
      video.pause();
      //video.currentTime = 0;
    }
  }, [openTrailer]);

  const toggle = () => {
    setopenTrailer(!openTrailer);
  };

  return (
    <div className="TestPage2">
      <header>
        <a href="/" className="logo">
          <img src="/images/TestPage2/logo.png" alt="logo" />
        </a>
        <div className="toggle">
          <img src="/images/TestPage2/toggle.png" alt="toggle" />
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
          <div className="play" onClick={toggle}>
            <img src="/images/TestPage2/play.png" alt="play" /> Watch Trailer
          </div>
          <div className="slide"></div>
          <ul className="sci">
            <li>
              <a href="https://facebook.com">
                <img src="/images/TestPage2/facebook.png" alt="facebook" />
              </a>
            </li>
            <li>
              <a href="https://twitter.com">
                <img src="/images/TestPage2/twitter.png" alt="twitter" />
              </a>
            </li>
            <li>
              <a href="https://instagram.com">
                <img src="/images/TestPage2/instagram.png" alt="instagram" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className={openTrailer ? "trailer active" : "trailer"}>
        <video src="/images/TestPage2/trailer.mp4" controls={true} />
        <img
          src="/images/TestPage2/close.png"
          className="close"
          onClick={toggle}
          alt="close button"
        />
      </div>
    </div>
  );
}

export default TestPage2;
