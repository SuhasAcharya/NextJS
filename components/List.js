import React from "react";
import styled from "styled-components";
import { device } from "./Device";
import Link from "../elements/Link";

const Div = styled.div`
  @media ${device.tablet} {
    display: flex;
    height: 60vh;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
  }

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    
  }
`;

export default function List({ children }) {
  return (
    <Div>
      <Link href="https://www.google.com" >About Us</Link>
      <Link href="https://www.google.com" >Our Solutions</Link>
      <Link href="https://www.google.com" >Team</Link>
      <Link href="https://www.google.com" >Reviews</Link>
      <Link href="https://www.google.com" >Our Blog</Link>
      <Link href="https://www.google.com" >Events & Conferences</Link>
    </Div>
  );
}
