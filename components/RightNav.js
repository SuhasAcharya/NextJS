import React from "react";
import styled from "styled-components";
import Button from "./Button";
import List from "./List";
import Icon from "../elements/Icon";
import { device } from "./Device";

const Ul = styled.div`
  @media ${device.tablet} {
    position: fixed;
    z-index:1000;
    transform: ${({ open }) => (open ? "translateX(-100%)" : "translateX(0%)")};
    left: 100%;
    top: 0;
    padding-top: 3rem;
    width: 100%;
    height:100vh;
    transition: transform 0.3s ease-in-out;
    flex-direction: column;
    background-color: white;
    display: flex;
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <Icon
        src={"/beee.png"}
        width="280"
        iconText="Connect. Contribute. Conquer."
      />
      <Div>
        <List />
        <Button type="secondary" size="sm">
          Hire Engineers
        </Button>
      </Div>
    </Ul>
  );
};

export default RightNav;
