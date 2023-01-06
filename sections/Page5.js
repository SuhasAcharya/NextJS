import React from "react";
import styled from "styled-components";
import Card from "../components/Card";
import Icon from "../elements/Icon";
import Dots from "../elements/Dots";

const MainDiv = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #f3f0e5;

  @media (max-width: 768px) {
    height: 85vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 0px;
    margin: 0px;
  }
`;

const Image = styled.div`
  opacity: 0.3;
  position: relative;
  top: 8rem;
  left: 8rem;
  width: 5rem;

  @media (max-width: 768px) {
    position: relative;
    left: 1.5rem;
    top: 5rem;
  }
`;

const Img = styled.img`
  @media (max-width: 768px) {
    width: 2rem;
  }
`;

const MainText = styled.h1`
  font-size: 3.5rem;
  color: #371e0e;

  @media (max-width: 768px) {
    display: flex;
    text-align: center;
    margin: 1%;
    font-size: 1.6rem;
    padding: 2%;
  }
`;

const SubText = styled.text`
  font-size: 20px;

  @media (max-width: 768px) {
    display: flex;
    text-align: center;
    padding: 4%;
    font-size: 18px;
  }
`;

const DotsDiv = styled.div`
position:relative;
top:5rem;
`

const TextDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  color: black;
  position: relative;
  top: 4.5rem;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
  }
`;

const CardDiv = styled.div`
  height: 60vh;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: flex-end;
  width: 100%;
  margin: 0px;
  padding: 0px;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    height: 30vh;
    width: 100%;
    justify-content: space-evenly;
    align-items: center;
  }
`;

const InfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  height: 5vh;
  display: flex;
  justify-content: center;
  alignitems: space-evenly;
  margin: 10px;
`;

const HeadDiv = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

const H1 = styled.h1`
  color: black;
  width: 100%;
  margin-bottom: 1%;
  font-size: 1.5rem;
  @media (max-width: 768px) {
    font-size: 1.2rem;
    margin-bottom: 2%;
  }
`;
const Text = styled.text`
  color: black;
  width: 100%;
  font-size: 0.9rem;
`;

const P = styled.p`
  color: black;
  padding: 3%;
  height: 15vh;
  letter-spacing: 1px;
`;

const Header = styled.div`
  width: 100%;
  height: 30vh;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 40vh;
  }
`;

const DivH = styled.div`
  display: flex;
  width: 67%;
  justify-content: space-around;
  align-items: center;
  margin: 0px;
  padding: 0px;

  @media (max-width: 768px) {
    display: none;
  }
`;
const DivS = styled.div`
display:flex;
width:33%;
justify-content:center;
align-items:center;

@media(max-width:768px){
  width:100%;
}

}

`;

const Page5 = () => {
  return (
    <MainDiv>
      <Header>
        <Image>
          <Img src={"./comma.png"}></Img>
        </Image>
        <TextDiv>
          <MainText>Our Customers Love And Experience</MainText>
          <SubText>
            Companies synergizing to deliver impeccable technological solutions
            for the client is our Blue Ocean strategy.
          </SubText>
        </TextDiv>
      </Header>

      <CardDiv>
        <DivS>
          <Card size="normal" type="white" fD="column">
            <HeadDiv>
              <Icon src={"./dp1.png"} borderRadius="100%" width="50px"></Icon>
              <InfoDiv>
                <H1>James Maxwell</H1>
                <Text>HR Manager,GeekyAnts</Text>
              </InfoDiv>
            </HeadDiv>
            <P>
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document or
              a typeface without relying on meaningful content.
            </P>
          </Card>
        </DivS>
        <DivH>
          <Card size="normal" type="white" fD="column">
            <HeadDiv>
              <Icon src={"./dp2.png"} borderRadius="100%" width="50px"></Icon>
              <InfoDiv>
                <H1>John Robert</H1>
                <Text>HR Manager,GeekyAnts</Text>
              </InfoDiv>
            </HeadDiv>
            <P>
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document or
              a typeface without relying on meaningful content.
            </P>
          </Card>
          <Card size="normal" type="white" fD="column">
            <HeadDiv>
              <Icon src={"./dp3.png"} borderRadius="100%" width="50px"></Icon>
              <InfoDiv>
                <H1>Yashika Max</H1>
                <Text>HR Manager,GeekyAnts</Text>
              </InfoDiv>
            </HeadDiv>
            <P>
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document or
              a typeface without relying on meaningful content.
            </P>
          </Card>
        </DivH>
      </CardDiv>
      <DotsDiv>
      <Dots />
      </DotsDiv>
    </MainDiv>
  );
};

export default Page5;
