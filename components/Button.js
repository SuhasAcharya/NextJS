import React from "react";
import styled from "styled-components";
import {device} from './Device'

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
  brown:{
    default:"var(--brown)",

  }
};

const size = {
  sm: {
    default: "var(--sm)",
  },
  normal: {
    default: "var(--normal)",
  },
  lg: {
    default: "var(--lg)",
  },
};

const Button = styled.div`
  background-color: ${(props) => type[props.type].default};
  padding: ${(props) => size[props.size].default};
  border-radius: calc(${(props) => size[props.size].default}/2);
  font-size: ${(props) => size[props.size].default};
  border: none;
  font-family: var(--font-familt-inter);
  font-weight: bold;
  display:flex;
  &:hover {
    background-color: ${(props) => type[props.type].hover};
  }


  @media(max-width:768px){
    width:40vh;
    display:flex;
    justify-content:center;
  }



`;

Button.defaultProps = {
  type: "secondary",
  size: "normal",
};

const button = ({ type, size, children, href,textColor }) => {
  return (
    <a href={href}>
      <Button type={type} size={size}>
        <text style={{ color:textColor}}>{children}</text>
      </Button>
    </a>
  );
};

export default button;
