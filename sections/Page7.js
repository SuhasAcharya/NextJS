import React from "react";
import styled, { isStyledComponent } from "styled-components";
import Img from "../elements/Img";
import Dots from "../elements/Dots";

const MainDiv = styled.div`
  height: 80vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  @media (max-width: 768px) {
    height: 70vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const Hexagon = styled.div`
  position: relative;
  clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);

  @media (max-width: 768px) {
    position: relative;
    clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
  }
`;

const HexaDiv = styled.div`
  height: 10vh;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  @media (max-width: 768px) {
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const H1 = styled.h1`
  color: #371e0e;
  font-size: 3rem;
  margin: 1%;

  @media (max-width: 768px) {
    color: #371e0e;
    font-size: 2rem;
  }
`;

const TextDiv = styled.div`
  height: 10vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 15%;
  margin-top: 5%;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    position: relative;
    bottom: 30%;
  }
`;

const Text = styled.text`
  color: black;
  font-size: 1.3rem;
  @media (max-width: 768px) {
    color: black;
    font-size: 1rem;
  }
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const Name = styled.text`
  color: black;
  font-size: 1.5rem;
  font-weight: bold;
`;

const Position = styled.text`
  color: black;
  font-size: 1rem;
`;

const PersonDiv = styled.div`
  margin: 7%;
  display: flex;
  height: 10vh;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

const DiveH = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 75%;

  @media (max-width: 768px) {
    display: none;
  }
`;

const DivS = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 25%;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    position: relative;
    bottom: 100%;
    width:auto;
  }
`;


const DotsDiv = styled.div`
position:relative;
top:5rem;
`


const Page7 = () => {
  return (
    <MainDiv>
      <TextDiv>
        <H1>Our Team</H1>
        <Text>Meet Our Passionate Team Members!</Text>
      </TextDiv>
      <HexaDiv>
        <DivS>
          <Div>
            <Hexagon>
              <Img src={"/person1.png"} height="200px" width="225px"></Img>
            </Hexagon>
            <PersonDiv>
              <Name>Alexa Motwani</Name>
              <Position>Sr. Developer</Position>
            </PersonDiv>
          </Div>
        </DivS>
        <DiveH>
          <Div>
            <Hexagon>
              <Img src={"/person2.png"} height="200px" width="225px"></Img>
            </Hexagon>
            <PersonDiv>
              <Name>Alexa Motwani</Name>
              <Position>Sr. Developer</Position>
            </PersonDiv>
          </Div>
          <Div>
            <Hexagon>
              <Img src={"/person3.png"} height="200px" width="225px"></Img>
            </Hexagon>
            <PersonDiv>
              <Name>Alexa Motwani</Name>
              <Position>Sr. Developer</Position>
            </PersonDiv>
          </Div>
          <Div>
            <Hexagon>
              <Img src={"/person4.png"} height="200px" width="225px"></Img>
            </Hexagon>
            <PersonDiv>
              <Name>Alexa Motwani</Name>
              <Position>Sr. Developer</Position>
            </PersonDiv>
          </Div>
        </DiveH>
      </HexaDiv>
      <DotsDiv>
      <Dots />
      </DotsDiv>
    </MainDiv>
  );
};

export default Page7;
