import React from "react";
import styled from "styled-components";
import Burger from "./Burger";
import Navbar from "./Navbar";

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
};

const size = {
  sm: {
    default: "var(--small)",
  },
  normal: {
    default: "var(--medium)",
  },
  lg: {
    default: "var(--large)",
  },
};

const Header = styled.div`
  background-color: ${(props) => type[props.type].default};
  height: ${(props) => size[props.size].default};

`;

Header.defaultProps = {
  type: "transparent",
  size: "lg",
};

const Div = styled.div`
  @media (min-width: 768px) {
    display: none;
  }
`;

export default function header({ children, type, size }) {
  return (
    <Header type={type} size={size}>
      <Navbar />
      <Div>
        <Burger />
      </Div>
    </Header>
  );
}
