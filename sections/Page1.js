import React from "react";
import Container from "../elements/Container";
import Button from "../components/Button";
import styled from "styled-components";
import Img from "../elements/Img";

const TextDiv = styled.div`
  @media (min-width: 768px) {
    height: 60vh;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-start;
  }

  height: 40vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

const TextMain = styled.text`
  @media (min-width: 768px) {
    text-align: start;
    padding: 0px;
    color: #341907;
    font-size: 4rem;
    font-weight: bold;
  }

  text-align: center;
  color: #341907;
  font-size: 2.7rem;
  font-weight: bold;
`;

const TextSub = styled.text`
  color: #341907;
  font-size: 2.1875rem;
  @media (max-width: 768px) {
    text-align: center;
    padding:6%;
    font-size:1.4rem;
    letter-spacing:1px;
  }
`;

const ImgDiv = styled.div`
  height: auto;
  width: auto;
  padding: 20px;
  @media (max-width: 768px) {
    display: none;
  }
`;

const LeftDiv = styled.div`
  dispaly: flex;
  flex-direction: column;
  height: 60vh;
  width: 80vh;
  justify-content: space-evenly;
  align-items: center;

  @media(max-width:768px){
    display:flex;
    flex-direction:column;
    justify-content:center;
  }
`;

const RightDiv = styled.div`
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ButtonDiv = styled.div`
  display: flex;
  justify-content: center;
`;

const MainDiv = styled.div`
  height: auto;
  width: 100%;
`;

const Page1 = () => {
  return (
    <MainDiv>
      <Container>
        <LeftDiv>
          <TextDiv>
            <TextMain>A Hive of Best Remote IT Talent</TextMain>

            <TextSub>
              Hire pre-screened engineers on a contractual basis today!
            </TextSub>
            <ButtonDiv>
              <Button
                type="secondary"
                size="normal"
                href="https://www.google.com"
              >
                Hire Engineers
              </Button>
            </ButtonDiv>
          </TextDiv>
        </LeftDiv>

        <RightDiv>
          <ImgDiv>
            <Img src={"/people.png"}></Img>
          </ImgDiv>
        </RightDiv>
      </Container>
    </MainDiv>
  );
};

export default Page1;
