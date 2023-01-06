import React from "react";
import styled from "styled-components";

const MainDiv = styled.div`

  @media (max-width:768px){
    display:block;
    height: fit -content;
    width: 100%;
    display: flex;
    justify-content: space-evenly;  
  }

  @media(min-width:768px){
    display:none;
  }
`;

const DotsDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
  height: fit-content;
  width: 12vh;
`;

const DotY = styled.div`
  background-color: #f0bf35;
  height: 15px;
  width: 15px;
  border-radius: 100%;
`;


const DotG = styled.div`
  background-color: #C4C4C4;
  height: 15px;
  width: 15px;
  border-radius: 100%;
`;

const Dots = () => {
  return (
    <MainDiv>
      <DotsDiv>
        <DotY />
        <DotG />
        <DotG />
      </DotsDiv>
    </MainDiv>
  );
};

export default Dots;
