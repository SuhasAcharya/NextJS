import React from "react";
import styled from "styled-components";
import Accordion from "../components/Accordion";
import Button from "../components/Button";

const MainDiv = styled.div`
  height: 120vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  @media (max-width: 768px) {
    height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
  }
`;

const AccordionDiv = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 768px) {
    height: 60vh;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  }
`;

const H1 = styled.h2`
  color: #341907;
  font-size: 3rem;
  @media (max-width: 768px) {
    font-size: 2rem;
    text-align: center;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SubDiv = styled.div`
  height: 60vh;
  width: 100%;
  background-color: #ffe69f;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TextDiv = styled.div`
  height: 35vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

const H2 = styled.h2`
  color: #341907;
  font-size: 2.5rem;
  @media (max-width: 768px) {
    font-size: 2rem;
    text-align: center;
    font-size: 1.8rem;
  }
`;

const Text = styled.div`
  color: black;
  font-size: 1.5rem;
  @media (max-width: 768px) {
    text-align: center;
    font-size: 1.2rem;
    padding: 5%;
  }
`;

export default function Page8() {
  return (
    <>
      <MainDiv>
        <Header>
          <H1>FAQ</H1>
        </Header>
        <AccordionDiv>
          <Accordion
            title="What is Lorem Ipsum?"
            content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
          />
          <Accordion
            title="Why do we use it?"
            content="This is a working accordion"
          />
          <Accordion
            title="Where does it come from?"
            content="This is a working accordion"
          />
          <Accordion
            title="Where can I get some?"
            content="This is a working accordion"
          />
          <Accordion
            title="Where can I get some?"
            content="This is a working accordion"
          />
        </AccordionDiv>
      </MainDiv>
      <SubDiv>
        <Content>
          <TextDiv>
            <H2>Let's build something amazing together!</H2>
            <Text>
              We put you at the centre of everything we do. Top class service
              and a memorable experience awaits..
            </Text>
          </TextDiv>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Button
              type="brown"
              size="normal"
              textColor="#F0BF35"
              href="https://www.google.com/"
            >
              Hire Enginners
            </Button>
          </div>
        </Content>
      </SubDiv>
    </>
  );
}
