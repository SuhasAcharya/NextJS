import React from "react";
import List from "./List";
import Button from "./Button";
import styled from "styled-components";

const Div = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

export default function  HeaderMenu() {
  return (
    <Div>
      <List />
      <Button type="secondary" size="sm">
        Hire Engineers
      </Button>
    </Div>
  );
}
