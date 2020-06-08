import React from "react";
import styled, { keyframes } from "styled-components";

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: black;
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  z-index: 1000;
`;

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(20deg);
  }
  50% {
    transform: rotate(40deg);
  }
  75% {
    transform: rotate(60deg);
  }
  100% {
    transform: rotate(90deg);
  }
`;

const Button = styled.div`
  display: flex;
  justify-content: center;
  width: 360px;
  font-size: 36px;
  color: #fff;
  border: 2px solid #fff;
  padding: 8px 0;
  cursor: pointer;
  list-style: none;
  &: hover #arrow {
    animation: ${rotate} 0.1s linear;
    animation-fill-mode: both;
  }
  &: hover {
    border: 2px solid #81ecec;
    background-color: #81ecec;
  }
`;

function Banner() {
  return (
    <>
      {/* Banner */}
      <Container id="top">
        <img
          src="/images/LandingPage/banner.jpg"
          alt="macbook"
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: "0.25",
          }}
        />
        <Section>
          <h1
            style={{
              color: "#fff",
              fontSize: "48px",
            }}
          >
            Hello, I'm <span style={{ color: "#E91E63" }}>HoJin Lee</span>.
            <br />
            I'm junior web developer.
          </h1>
          <br />
          <a href="#navi" style={{ textDecoration: "none" }}>
            <Button>
              View my work
              <li id="arrow" style={{ marginLeft: "15px" }}>
                →
              </li>
            </Button>
          </a>
        </Section>
      </Container>
    </>
  );
}

export default Banner;
