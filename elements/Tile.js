import React from "react";
import styled from "styled-components";

const Tile = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: white;
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  border-radius: 10px;
  margin: 1%;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: white;
    height: calc(${(props) => props.height} / 2);
    width: calc(${(props) => props.width} / 1.5);
    border-radius: 10px;
    margin:5%;
  }
`;

const Img = styled.img`
  border-radius: ${(props) => props.borderRadius};

  @media(max-width:768px){
    border-radius: ${(props) => props.borderRadius};
    margin-left:15%;

  }
`;

const Text = styled.text`
  color: ${(props) => props.textColor};
  font-size: 1.2rem;
  font-weight: bold;
  width: 100%;
  margin: 7%;

  @media (max-width: 768px) {
    color: ${(props) => props.textColor};
    font-size: 0.9rem;
    font-weight: bold;
    width: 100%;
    display:flex;
    justify-content:flex-start;
  }
`;

const Div = styled.div`
  display: flex;
  flex-direction: row;
  width: 20rem;
  align-items: center;

  @media(max-width:768px){
    display: flex;
    flex-direction: row;
    width: 100%;
    align-items: center;
    justify-content:center;

  }
`;

export default function tile({
  src,
  tileText,
  height,
  width,
  textColor,
  borderRadius,
}) {
  return (
    <Tile height={height} width={width}>
      <Div>
        <Img src={src} borderRadius={borderRadius} />
        <Text textColor={textColor}>{tileText}</Text>
      </Div>
    </Tile>
  );
}
