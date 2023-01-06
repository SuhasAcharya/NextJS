import React from "react";
import styled from "styled-components";
import Icon from "../elements/Icon";
import HeaderMenu from "./HeaderMenu";

const Nav = styled.nav`
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-around;
  }

  @media (max-width:768px){
    display:flex;
    justify-content:space-between;
  }
`;




const Navbar = () => {
  return (
    <Nav>
      <Icon
        src={"/beee.png"}
        width="280"
        iconText="Connect. Contribute. Conquer."
        textColor="#341907"
      />
      <HeaderMenu />
    </Nav>
  );
};

export default Navbar;
