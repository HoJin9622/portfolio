import React from "react";
import styled from "styled-components";

const CARD = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  background: #fff;
  @media (max-width: 1000px) {
    flex-direction: row;
    margin: 10px 0;
  }
  @media (max-width: 600px) {
    flex-direction: column;
    margin: 10px 0;
  }
`;

const CONTAINER = styled.div`
  position: relative;
  width: 1000px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  ${CARD}:nth-child(even) {
    flex-direction: column-reverse;
  }
  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fit, minmax(100%, 1fr));
    margin: 50px;
    ${CARD}:nth-child(even) {
      flex-direction: row-reverse;
      margin: 10px 0;
    }
  }
  @media (max-width: 600px) {
    ${CARD}:nth-child(even) {
      flex-direction: column;
    }
  }
`;

const IMGBOX = styled.div`
  position: relative;
  width: 250px;
  height: 250px;
  background: #000;
  @media (max-width: 1000px) {
    width: 50%;
  }
  @media (max-width: 600px) {
    width: 100%;
  }
`;

const IMG = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const CONTENTBOX = styled.div`
  position: relative;
  width: 250px;
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 1000px) {
    width: 50%;
  }
  @media (max-width: 600px) {
    width: 100%;
    height: 200px;
  }
`;

const CONTENT = styled.div`
  padding: 20px;
  text-align: center;
`;

function TestPage3() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        background: "#fade3e",
      }}
    >
      <CONTAINER>
        <CARD>
          <IMGBOX>
            <IMG src="/images/TestPage3/food1.jpg" alt="food" />
          </IMGBOX>
          <CONTENTBOX>
            <CONTENT>
              <h2>생연어</h2>
              <p>
                곡식이나 채소, 고기 등을 익히거나 다듬거나 양념을 하여 사람이
                먹을 수 있게 만든, 밥이나 국이나 반찬 등의 물건.
              </p>
            </CONTENT>
          </CONTENTBOX>
        </CARD>
        <CARD>
          <IMGBOX>
            <IMG src="/images/TestPage3/food2.jpg" alt="food" />
          </IMGBOX>
          <CONTENTBOX>
            <CONTENT>
              <h2>훈제연어</h2>
              <p>
                곡식이나 채소, 고기 등을 익히거나 다듬거나 양념을 하여 사람이
                먹을 수 있게 만든, 밥이나 국이나 반찬 등의 물건.
              </p>
            </CONTENT>
          </CONTENTBOX>
        </CARD>
        <CARD>
          <IMGBOX>
            <IMG src="/images/TestPage3/food3.jpg" alt="food" />
          </IMGBOX>
          <CONTENTBOX>
            <CONTENT>
              <h2>한정식</h2>
              <p>
                곡식이나 채소, 고기 등을 익히거나 다듬거나 양념을 하여 사람이
                먹을 수 있게 만든, 밥이나 국이나 반찬 등의 물건.
              </p>
            </CONTENT>
          </CONTENTBOX>
        </CARD>
        <CARD>
          <IMGBOX>
            <IMG src="/images/TestPage3/food4.jpg" alt="food" />
          </IMGBOX>
          <CONTENTBOX>
            <CONTENT>
              <h2>스파게티</h2>
              <p>
                곡식이나 채소, 고기 등을 익히거나 다듬거나 양념을 하여 사람이
                먹을 수 있게 만든, 밥이나 국이나 반찬 등의 물건.
              </p>
            </CONTENT>
          </CONTENTBOX>
        </CARD>
      </CONTAINER>
    </div>
  );
}

export default TestPage3;
