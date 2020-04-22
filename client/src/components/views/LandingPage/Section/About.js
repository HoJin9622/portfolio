import React from "react";
import styled from "styled-components";

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
`;

function About() {
  return (
    <>
      <TitleContainer>
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
            style={{ width: "250px" }}
          />
          <br />
          안녕하세요.
          <br />
          저는 주니어 웹 개발자입니다.
          <br />
          현재 동의대학교 재학중이고, 웹 개발에 관심이 많습니다.
        </Profile>

        <div>
          {/* Stack */}
          <img src="/images/LandingPage/progress.png" alt="progress" />
        </div>
      </ProfileContainer>
    </>
  );
}

export default About;
