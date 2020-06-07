import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background: #fff;
`;

const TitleContainer = styled.div`
  display: flex;
  font-size: 36px;
  padding-top: 116px;
  font-weight: 700;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-bottom: 80px;
`;

function Blog() {
  return (
    <Container id="blog">
      <TitleContainer>
        Blog
        <br />
        <hr style={{ width: "300px", height: "5px", background: "black" }} />
      </TitleContainer>
    </Container>
  );
}

export default Blog;
