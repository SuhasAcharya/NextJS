import React from "react";
import styled from "styled-components";

const type = {
  primary: {
    default: "var(--primary)",
    hover: "var(--textcolor)",
  },
  secondary: {
    default: "var(--secondary)",
    hover: "orange",
  },
  success: {
    default: "var(--success)",
    hover: "lightgreen",
  },
  error: {
    default: "var(--error)",
    hover: "red",
  },
  warning: {
    default: "red",
    hover: "var(--error)",
  },
  transparent: {
    default: "var(--transparent)",
  },
  brown: {
    default: "var(--brown)",
  },
};

const size = {
  sm: {
    default: "var(--small-bnr)",
  },
  normal: {
    default: "var(--medium-bnr)",
  },
  lg: {
    default: "var(--large-bnr)",
  },
};

const Banner = styled.div`
  background-color: ${(props) => type[props.type].default};
  height: calc(${(props) => size[props.size].default}*2);
  width: calc(${(props) => size[props.size].default}*15);
  border-radius: calc(${(props) => size[props.size].default} / 5);
  display: flex;
  align-items: center;
  justify-content: space-evenly;


  @media (max-width:768px){
    flex-direction:column;
    align-items:center;
    justify-content:space-evenly;
    height:90vh;
    width:90%;
    padding:10%;
    margin-bottom:30%;
  }
    
`;

export default function banner({ type, size, children }) {
  return (
    <Banner type={type} size={size}>
      {children}
    </Banner>
  );
}
