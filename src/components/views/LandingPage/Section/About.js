import React from "react";
import styled from "styled-components";

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

const AbilityContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 400px;
`;

const Image = styled.img`
  width: 180px;
  object-fit: cover;
`;

const ProfileContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 400px;
  margin-top: 40px;
  padding-bottom: 50px;
`;

const Profile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-weight: 600;
  font-size: 18px;
  width: 550px;
`;

const ProgressContainer = styled.div`
  width: 550px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProgressBar = styled.div`
  height: 30px;
  width: 450px;
  background-color: #d8d8d8;
  border-radius: 20px;
`;

const Percentage = styled.div`
  background: linear-gradient(to left, #00cec9, #81ecec);
  box-shadow: 0 3px 3px -5px #00cec9, 0 2px 5px #81ecec;
  border-radius: 20px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 1;
  height: 100%;
  width: ${(props) => props.width}%;
  transition: 1s ease;
`;

function About() {
  return (
    <>
      <TitleContainer id="about">
        About
        <br />
        <hr style={{ width: "300px", height: "5px", background: "black" }} />
      </TitleContainer>

      <AbilityContainer>
        <Image src="/images/LandingPage/html.png" alt="html" />
        <Image src="/images/LandingPage/css.png" alt="css" />
        <Image src="/images/LandingPage/js.png" alt="js" />
      </AbilityContainer>
      <ProfileContainer>
        <Profile>
          <img
            src="/images/LandingPage/profile.jpg"
            alt="my profile"
            style={{ width: "250px", borderRadius: "30px" }}
          />
          <br />
          안녕하세요.
          <br />
          이호진입니다.
        </Profile>

        <ProgressContainer>
          <ul>
            <li style={{ listStyle: "none", marginBottom: "20px" }}>
              HTML
              <ProgressBar>
                <Percentage width="80">80%</Percentage>
              </ProgressBar>
            </li>
            <li style={{ listStyle: "none", marginBottom: "20px" }}>
              React
              <ProgressBar>
                <Percentage width="60">60%</Percentage>
              </ProgressBar>
            </li>
            <li style={{ listStyle: "none", marginBottom: "20px" }}>
              CSS
              <ProgressBar>
                <Percentage width="50">50%</Percentage>
              </ProgressBar>
            </li>
            <li style={{ listStyle: "none", marginBottom: "20px" }}>
              JavaScript
              <ProgressBar>
                <Percentage width="30">30%</Percentage>
              </ProgressBar>
            </li>
          </ul>
        </ProgressContainer>
      </ProfileContainer>
    </>
  );
}

export default About;
