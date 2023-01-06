import React from "react";
import styled from "styled-components";
import Img from "../elements/Img";

const MainDiv = styled.div`
  background-image: url(/page4.png);
  height: 90vh;
  width: 100%;
  background-repeat: no-repeat;
  background-position: center;

  @media (max-width: 768px) {
    height: 150vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const BgDiv = styled.div`
  height: 90vh;
  width: 100%;
  background-color: #2d1606;
  opacity: 0.9;
  position: absolute;

  @media (max-width: 768px) {
    height: 150vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    background-color: #2d1606;
  }
`;

const ContentDiv = styled.div`
  height: auto;
  width: 100%;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin-bottom: 20%;
  }
`;

const MainText = styled.h1`
  font-size: 3rem;
  display: flex;
  justify-content: center;
  padding: 10%;
  color: white;
  position: relative;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const EllipseDiv = styled.div`
  height: 35vh;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;

  @media (max-width: 768px) {
    display: flex;
    height: 100vh;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  }
`;

const Ellipse = styled.div`
  background-color: #f0bf35;
  height: 8rem;
  width: 8rem;
  border-radius: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Line = styled.div`
  border: none;
  border-top: 3px dashed #f0bf35;
  width: 70%;
  position: relative;
  top: 5rem;
  left: 17rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const EllipseContainer = styled.div`
  height: auto;
  width: 17rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;

  @media (max-width: 768px) {
  }
`;

const EllipseText = styled.text`
  color: white;
  width: 100%;
  font-size: 1.5rem;
  text-align: center;
  margin: 4%;
  font-weight: bold;
`;

const Page4 = () => {
  return (
    <MainDiv>
      <BgDiv />

      <ContentDiv>
        <MainText>Hire through Yellowbees.io with simple steps</MainText>
        <Line />
        <EllipseDiv>
          <EllipseContainer>
            <Ellipse>
              <Img src={"./el2.png"} height="3rem"></Img>
            </Ellipse>
            <EllipseText> Post Your Requirement</EllipseText>
          </EllipseContainer>
          <EllipseContainer>
            <Ellipse>
              <Img src={"./el1.png"} height="3rem"></Img>
            </Ellipse>
            <EllipseText> Account Manager Assist You</EllipseText>
          </EllipseContainer>
          <EllipseContainer>
            <Ellipse>
              <Img src={"./el4.png"} height="3rem"></Img>
            </Ellipse>
            <EllipseText> Assess & Shortlisting The Candidates</EllipseText>
          </EllipseContainer>
          <EllipseContainer>
            <Ellipse>
              <Img src={"./el3.png"} height="3rem"></Img>
            </Ellipse>
            <EllipseText> Onboarding</EllipseText>
          </EllipseContainer>
        </EllipseDiv>
      </ContentDiv>
    </MainDiv>
  );
};

export default Page4;
