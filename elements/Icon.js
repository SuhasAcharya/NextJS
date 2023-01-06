import React from "react";
import styled from "styled-components";

const Div = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-left: 10px;
`

const Img = styled.img`
border-radius:${(props) => props.borderRadius};
max-width:100%;
`

const Text = styled.text`
color: ${(props)=> props.textColor};
font-size: 15px;
margin-left: 60px;

`

export default function Icon({ src, iconText, width,textColor,borderRadius }) {
  return (
    <Div>
      <Img src={src} width={width} borderRadius={borderRadius} />
      <Text textColor={textColor}>
        {iconText}
      </Text>
    </Div>
  );
}
