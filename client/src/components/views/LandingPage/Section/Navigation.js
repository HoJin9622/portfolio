import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 1000px 20px 200px;
  background: #2c3e50;
  color: #fff;
  font-weight: 500;
`;

function Navigation() {
  return (
    <>
      <Container>
        <div>Home</div>
        <div>About</div>
        <div>Portfolio</div>
        <div>Contact</div>
      </Container>
    </>
  );
}

export default Navigation;
