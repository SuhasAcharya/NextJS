import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import styled from "styled-components"

const Div = styled.div`
  @media (min-width: 768px) {
    position: sticky;
    width: 100%;
    top: 20px;
    z-index:500;
  }

  @media (max-width: 768px) {
    position: sticky;
    top: 30px;
    z-index:500;
  }
`;

const Bg = styled.div`
  background-image: url(/bg.jpg);
  height: max-content;
  position:relative;

  @media (max-width: 768px) {
    height: max-content;
    position:relative;
  }
`;

export default function Layout({ children }) {
  return (
    <>
      <Bg>
        <Div>
          <Header size="lg" type="transparent" />
        </Div>
        {children}
        <Footer size="lg" type="brown" />
      </Bg>
    </>
  );
}
