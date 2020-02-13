import React from "react";
import styled from "styled-components";
import Web1 from "./projectComponent/Web1.js";
import Nodejs from "./projectComponent/Nodejs.js";

const Container = styled.div`
  position: absolute;
  left: 25%;
  top: 20%;
  background-color: white;
  border: 3px solid black;
  border-radius: 8px;
  text-align: center;
  width: 50%;
`;

const Card = styled.div`
  box-shadow: 5px 5px 5px 5px gray;
  margin: 10px 10px 10px 10px;
  width: 30%;
`;

function App() {
  return (
    <Container>
      목록
      <Card>
        <img alt="생활코딩" src={require("./images/coding.png")} />
        Web1 <a href="https://github.com/HoJin9622/web1">Github</a>
      </Card>
    </Container>
  );
}

export default App;
