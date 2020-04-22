import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background: #ecf0f1;
`;

const TitleContainer = styled.div`
  display: flex;
  font-size: 36px;
  padding-top: 50px;
  font-weight: 700;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-bottom: 80px;
`;

const LanguageContainer = styled.div`
  display: flex;
  padding: 0 400px;
  justify-content: space-between;
  align-items: center;
`;

const Font = styled.div`
  font-weight: 600;
  font-size: 18px;
  cursor: pointer;
`;

function Portfolio() {
  return (
    <>
      <Container>
        <TitleContainer>
          Portfolio
          <br />
          <hr style={{ width: "300px", height: "5px", background: "black" }} />
        </TitleContainer>
        <LanguageContainer>
          <Font>All</Font>
          <Font>React</Font>
          <Font>React-Natvie</Font>
          <Font>JavaScript</Font>
        </LanguageContainer>
      </Container>
    </>
  );
}

export default Portfolio;
