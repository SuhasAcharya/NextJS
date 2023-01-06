import React from "react";
import styled from "styled-components";
import Tile from "../elements/Tile";

const MainDiv = styled.div`
  width: 100%;
  height: 90vh;
  background-color: #371e0e;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    height: 130vh;
    width: 100%;
  }
`;

const TileDiv = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    height: 400vh;
    width: 100%;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    padding: 5%;
  }
`;

const H1 = styled.h1`
  color: white;
  font-size: 3rem;
  margin: 3%;

  @media (max-width: 768px) {
    color: white;
    font-size: 2rem;
    text-align: center;
    margin-top: 10%;
  }
`;

const Page6 = () => {
  return (
    <MainDiv>
      <H1>We Offers You The Best Tech Solutions</H1>
      <TileDiv>
        <Tile
          height="100px"
          width="400px"
          src={"/tile1.png"}
          tileText="Web Development"
          textColor="black"
        />
        <Tile
          height="100px"
          width="400px"
          src={"/tile2.png"}
          tileText="Quality Assurance"
          textColor="black"
        />
        <Tile
          height="100px"
          width="400px"
          src={"/tile3.png"}
          tileText="AI/ML developement"
          textColor="black"
        />
        <Tile
          height="100px"
          width="400px"
          src={"/tile4.png"}
          tileText="API Development"
          textColor="black"
        />
        <Tile
          height="100px"
          width="400px"
          src={"/tile5.png"}
          tileText="UI/UX design "
          textColor="black"
        />
        <Tile
          height="100px"
          width="400px"
          src={"/tile6.png"}
          tileText="Business Analyst"
          textColor="black"
        />
        <Tile
          height="100px"
          width="400px"
          src={"/tile7.png"}
          tileText="IoT Development"
          textColor="black"
        />
        <Tile
          height="100px"
          width="400px"
          src={"/tile8.png"}
          tileText="Database Development"
          textColor="black"
        />
        <Tile
          height="100px"
          width="400px"
          src={"/tile1.png"}
          tileText="Mobile app Development"
          textColor="black"
        />
        <Tile
          height="100px"
          width="400px"
          src={"/tile2.png"}
          tileText="Devops"
          textColor="black"
        />
        <Tile
          height="100px"
          width="400px"
          src={"/tile3.png"}
          tileText="Data Science"
          textColor="black"
        />
      </TileDiv>
    </MainDiv>
  );
};

export default Page6;

