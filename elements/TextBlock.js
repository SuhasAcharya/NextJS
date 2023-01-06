import React from "react";
import styled from "styled-components";


const Title = styled.h1`
  color: white;
  font-weight:bold;
  font-size: 1.875rem;
  letter-spacing: 0.125rem;
  margin: 0.0625rem;
  text-align:start;


  @media (max-width:768px){
    text-align:start;
  }

`

const SubText = styled.text`
  color:white;
  letter-spacing: 0.0625rem;
  text-align:start;

  @media (max-width:768px){
    text-align:start;
  }



`

export default function TextBlock({ title, text }) {
  return (
    <div
      style={{
        flexDirection: "column",
      }}
    >
      <Title>
        {title}
      </Title>
      <SubText>
        {text}
      </SubText>
    </div>
  );
}

