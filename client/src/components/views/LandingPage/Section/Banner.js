import React from "react";
import styled from "styled-components";

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

const Button = styled.div`
  width: 360px;
  font-size: 36px;
  color: #fff;
  border: 2px solid #fff;
  padding: 8px 0;
  cursor: pointer;
`;

function Banner() {
  return (
    <>
      {/* Banner */}
      <Container>
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
            Hello, I'm HoJin Lee.
            <br />
            I'm junior web developer.
          </h1>
          <br />
          <a href="#navi" style={{ textDecoration: "none" }}>
            <Button>View my work</Button>
          </a>
        </Section>
      </Container>
    </>
  );
}

export default Banner;
