import React from "react";
import Img from "../elements/Img";
import styled from "styled-components";

const MainDiv = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-color:white;

  @media (max-width: 768px) {
    height: 90vh;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: flex-start;
  }
`;

const MainText = styled.h1`
  color: #341907;
  font-size: 3rem;
  margin-left: 10px;

  @media (max-width: 768px) {
    text-align: center;
    font-size: 2.5rem;
  }
`;

const SubText = styled.p`
  color: black;
  font-size: 1.3rem;
  width: 100%;
  margin: 2%;
  @media (max-width: 768px) {
    font-size: 0.9rem;
    width: 100%;
    padding: 4%;
  }
`;

const LeftDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  height: 60vh;
  width: auto;
  margin: 5%;
`;

const RightDiv = styled.div`
  padding: 2.5%;
  height: auto;
  width: auto;

  @media (max-width: 768px) {
    display: none;
  }
`;

const SubTextDiv = styled.div`
  height: max-content;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 100%;
`;

const Page3 = () => {
  return (
    <MainDiv>
      <LeftDiv>
        <MainText>
          We Solve Your IT Talent Hiring Problem Faster With Transparency{" "}
        </MainText>
        <SubTextDiv>
          <SubText> {"<"} Global marketplace for Tech talents </SubText>
          <SubText> {"<"} Hire any skill, any numbers </SubText>
          <SubText>
            {"<"} Trustworthy talent of 2000+ verified engineers with a proven
            track record of execution.
          </SubText>
          <SubText> {"<"} Remote engineers on contractual basis </SubText>
          <SubText> {"<"} Immediate Joiner </SubText>
          <SubText>
            {"<"} Dedicated account manager will assist you throughout the
            process.{" "}
          </SubText>
        </SubTextDiv>
      </LeftDiv>
      <RightDiv>
        <Img src={"./nerd.png"} height="30rem" width="60rem"></Img>
      </RightDiv>
    </MainDiv>
  );
};

export default Page3;
