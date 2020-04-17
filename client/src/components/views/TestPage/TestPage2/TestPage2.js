import React, { useState, useEffect, Fragment } from "react";
import styled, { keyframes } from "styled-components";

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

  const Header = styled.header`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 40px 100px;
    z-index: 1000;
  `;

  const LogoContainer = styled.a`
    max-width: 120px;
  `;

  const ToggleContainer = styled.div`
    max-width: 60px;
    cursor: pointer;
  `;

  const Banner = styled.div`
    position: relative;
    width: 100%;
    min-height: 100vh;
    padding: 0 100px;
    background: url(/images/TestPage2/bg.jpg);
    background-position: center;
    background-size: cover;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  `;

  const Content = styled.div`
    max-width: 550px;
  `;

  const Title = styled.h2`
    text-transform: uppercase;
    font-weight: 400;
    font-size: 2.5em;
    letter-spacing: 0.1em;
    color: #fff;
  `;

  const Text = styled.p`
    font-size: 1.2em;
    font-weight: 300;
    letter-spacing: 0.02em;
    line-height: 1.5em;
    color: #fff;
    margin: 15px 0 35px;
  `;

  const PlayContainer = styled.div`
    position: relative;
    display: inline-flex;
    justify-content: flex-start;
    align-items: center;
    color: #fff;
    text-transform: uppercase;
    font-weight: 500;
    text-decoration: none;
    letter-spacing: 2px;
    font-size: 1.2em;
    cursor: pointer;
  `;

  const SNSContainer = styled.ul`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  `;

  const List = styled.li`
    list-style: none;
  `;

  const SNSLink = styled.a`
    text-decoration: none;
  `;

  const SNSImage = styled.img`
    filter: invert(1);
    transform: scale(0.6);
  `;

  const slide = keyframes`
  0% {
    background-position: top;
  }
  45%,
  55% {
    background-position: bottom;
  }
`;

  const Slide = styled.div`
    position: absolute;
    bottom: 50px;
    left: calc(50% - 250px / 2);
    width: 250px;
    height: 150px;
    background: url(/images/TestPage2/joker.png);
    background-size: cover;
    cursor: pointer;
    animation: ${slide} 25s linear infinite;
  `;

  const Trailer = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10000;
    background: rgba(0, 0, 0, 0.85);
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    visibility: ${(props) => (props.isOpen ? "visible" : "hidden")};
    opacity: ${(props) => (props.isOpen ? 1 : 0)};
  `;

  const CloseButton = styled.img`
    position: absolute;
    top: 30px;
    right: 30px;
    cursor: pointer;
    filter: invert(1);
    max-width: 32px;
  `;

  return (
    <Fragment>
      <Header>
        <LogoContainer>
          <img
            style={{ maxWidth: "100%" }}
            src="/images/TestPage2/logo.png"
            alt="logo"
          />
        </LogoContainer>
        <ToggleContainer>
          <img
            style={{ maxWidth: "100%" }}
            src="/images/TestPage2/toggle.png"
            alt="toggle"
          />
        </ToggleContainer>
      </Header>
      <Banner>
        <Content>
          <Title>
            Put on a <span style={{ fontWeight: "800" }}>Happy</span> face
          </Title>
          <Text>
            At Success by Design, we understand how important it is for
            educators to find the right tools for student success. When it comes
            to buying materials in bulk, teachers and campus administrators feel
            the weight of that responsibility twice over. No one wants to spend
            their limited resources on a product their students are just going
            to set aside.
          </Text>
          <PlayContainer onClick={toggle}>
            <img
              style={{ marginRight: "10px", maxWidth: "50px" }}
              src="/images/TestPage2/play.png"
              alt="play"
            />
            Watch Trailer
          </PlayContainer>
          <Slide />
          <SNSContainer>
            <List>
              <SNSLink href="https://facebook.com">
                <SNSImage src="/images/TestPage2/facebook.png" alt="facebook" />
              </SNSLink>
            </List>
            <List>
              <SNSLink href="https://twitter.com">
                <SNSImage src="/images/TestPage2/twitter.png" alt="twitter" />
              </SNSLink>
            </List>
            <List>
              <SNSLink href="https://instagram.com">
                <SNSImage
                  src="/images/TestPage2/instagram.png"
                  alt="instagram"
                />
              </SNSLink>
            </List>
          </SNSContainer>
        </Content>
      </Banner>
      <Trailer isOpen={openTrailer}>
        <video
          style={{ maxWidth: "900px", outline: "none" }}
          src="/images/TestPage2/trailer.mp4"
          controls={true}
        />
        <CloseButton
          src="/images/TestPage2/close.png"
          onClick={toggle}
          alt="close button"
        />
      </Trailer>
    </Fragment>
  );
}

export default TestPage2;
