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
  grey: {
    default: "var(--grey)",
  },
  white:{
    default:"var(--white)"
  }
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

const Card = styled.div`
  background-color: ${(props) => type[props.type].default};
  height: calc(${(props) => size[props.size].default}*1.6);
  width: calc(${(props) => size[props.size].default}*2);
  padding: 30px;
  border-radius: 10px;
  display: flex;
  flex-direction:${(props) => props.fD};
  justify-content: space-evenly;
  align-items: center;

  @media (max-width:768px){
    width:80%;
    margin:2%;
    display:flex;
    flex-direction:column;

  }
`;

Card.defaultProps = {
  display:"flex",
  flexDirection:"column",
}

export default function card({ children, size, type,fD }) {
  return (
    <Card size={size} type={type} fD={fD}>
      {children}
    </Card>
  );
}
