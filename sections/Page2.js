import React from "react";
import styled from "styled-components";
import Container from "../elements/Container";
import Card from "../components/Card";
import Banner from "../components/Banner";
import Icon from "../elements/Icon";
import TextBlock from "../elements/TextBlock";

const BannerBlock = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  align-items: center;
  padding: 1.5%;
  @media (max-width: 768px) {
    display: flex;
    justify-content: flex-start;
    width: 100%;
    align-items: center;
  }
`;

const Line = styled.div`
  height: 7rem;
  width: 0.1rem;
  background-color: white;
  opacity: 0.3;

  @media (max-width: 768px) {
    width: 11rem;
    height: 0.1rem;
    background-color: white;
    opacity: 0.3;
  }
`;

const CardsDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: auto;
  background-color:white;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: auto;
    justify-content: space-evenly;
    align-items: center;
  }
`;

const BannerDiv = styled.div`
  height: 25vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 90%;


  @media (max-width: 768px) {
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-evely;
    align-items: center;
    width: 90%;
  }
`;

const Title = styled.text`
  @media (min-width: 768px) {
    text-align: center;
    width: 100%;
    color: #341907;
    font-size: 3.7rem;
    font-weight: bold;
    margin-bottom: 3%;
    background-color:white;
  }

  color: #341907;
  font-size: 1.6rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 10%;
`;

const TextDiv = styled.div`
  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    height: 40vh;
    background-color:white;
  }

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 5%;
`;

const Text = styled.text`
  @media (min-width: 768px) {
    display:block;
    color: black;
    font-size: 1.5rem;
    text-align: center;

  }
  display:none;
`;

const CardText = styled.text`
  color: black;
  font-size: 1.25rem;
  padding: 1.25rem;
  text-align: center;
`;

const Page2 = () => {
  return (
    <>
      <Container>
        <BannerDiv>
          <Banner type="brown" size="sm" className="banner">
            <BannerBlock>
              <Icon src={"/bn1.png"}></Icon>
              <TextBlock title="3000+" text="Happy Clients"></TextBlock>
            </BannerBlock>
            <Line />
            <BannerBlock>
              <Icon src={"/bn2.png"}></Icon>
              <TextBlock title="10,000+" text="Developers"></TextBlock>
            </BannerBlock>
            <Line />
            <BannerBlock>
              <Icon src={"/bn3.png"}></Icon>
              <TextBlock
                title="1000+ "
                text="Verified talented Partners"
              ></TextBlock>
            </BannerBlock>
            <Line />
            <BannerBlock>
              <Icon src={"/bn4.png"}></Icon>
              <TextBlock title="250+ " text="To hire Engineers"></TextBlock>
            </BannerBlock>
          </Banner>
        </BannerDiv>
      </Container>

      <Container>
        <TextDiv>
          <Title>
            We are entitled to be the preferred path for Remote-Talent
            Acquisition
          </Title>
          <Text>
            Companies synergizing to deliver impeccable technological solutions
            for the client is our Blue Ocean strategy.
          </Text>
        </TextDiv>
      </Container>

      <CardsDiv>
        <Card type="grey" size="normal" fD="column">
          <Icon src={"/card1.png"}></Icon>
          <CardText>
            Open option to discern the hefty pool of Software Developers and
            Leads.
          </CardText>
        </Card>

        <Card type="grey" size="normal" fD="column">
          <Icon src={"/card3.png"}></Icon>
          <CardText>
            Engage in global projects and clients on a remote basis.
          </CardText>
        </Card>

        <Card type="grey" size="normal" fD="column">
          <Icon src={"/card1.png"}></Icon>
          <CardText>
            Broad-cast your ideas and tech stacks that maneuvers the business.
          </CardText>
        </Card>
      </CardsDiv>
    </>
  );
};

export default Page2;
