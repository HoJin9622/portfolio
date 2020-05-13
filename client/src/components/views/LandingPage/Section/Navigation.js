import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 1000px 20px 400px;
  background: #2c3e50;
  color: #fff;
  font-weight: 500;
  text-decoration: none;
  color: #fff;
`;

const Section = styled.div`
  cursor: pointer;
`;

function Navigation() {
  return (
    <>
      <Container id="navi">
        <a href="#top" style={{ textDecoration: "none", color: "#fff" }}>
          <Section>Home</Section>
        </a>
        <a href="#about" style={{ textDecoration: "none", color: "#fff" }}>
          <Section>About</Section>
        </a>
        <a href="#portfolio" style={{ textDecoration: "none", color: "#fff" }}>
          <Section>Portfolio</Section>
        </a>
        <a href="#blog" style={{ textDecoration: "none", color: "#fff" }}>
          <Section>Blog</Section>
        </a>
        <a href="#contact" style={{ textDecoration: "none", color: "#fff" }}>
          <Section>Contact</Section>
        </a>
      </Container>
      <div
        style={{ backgroundColor: "#00cec9", width: "100%", height: "5px" }}
      />
    </>
  );
}

export default Navigation;
