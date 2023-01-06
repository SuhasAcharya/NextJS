import React from "react";
import Link from "../elements/Link";
import styled from "styled-components";
import Img from "../elements/Img";
import TextBlock from "../elements/TextBlock";

const type = {
  primary: {
    default: "var(--primary)",
    hover: "var(--Linkcolor)",
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
  grey: {
    default: "var(--grey)",
  },
  brown: {
    default: "var(--brown)",
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

const Footer = styled.div`
  background-color: ${(props) => type[props.type].default};
  height: calc(${(props) => size[props.size].default}*5);
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;

  @media (max-width: 768px) {
    width: 100%;
    height: calc(${(props) => size[props.size].default}*10);
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    padding: 1%;
  }
`;

Footer.defaultProps = {
  type: "transparent",
  size: "lg",
};

const MainDiv = styled.div`
  height: 80%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

const DivRight = styled.div`
  height: 90%;
  width: 35%;
  background-color: #341907;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  padding: 3%;

  @media (max-width: 768px) {
    height: 40%;
    width: 90%;
  }
`;

const DivLeft = styled.div`
  height: 90%;
  width: 60%;
  background-color: #341907;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    height: 90%;
    width: 90%;
    justify-content:space-around;
  }
`;

const Div1 = styled.div`
  height: 90%;
  width: 33%;
  background-color: #341907;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  @media (max-width: 768px) {

    background-color: #341907;
    @media (max-width:768px){
      display:flex;
      height: 33%;
      width: 90%;
      flex-direction:column;
      justify-content:space-evenly;
      align-items:flex-start;
     }
  }
`;

const BottomDiv = styled.div`
  height: 20%;
  width: 100%;
  background-color: #341907;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 5%;

  @media (max-width:768px){
    height:5vh;
    width:100%;
  }

`;

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content:space-evenly;

  }
`;

const Icons = styled.div`
  display: flex;
  width: 60%;
  justify-content: space-evenly;
  align-items: flex-start;
`;

const Line = styled.div`
  background-color: white;
  opacity: 0.2;
  width: 100%;
  height: 1px;
  margin:0px;
`;

const TextLink = styled.text`
color:white;
font-size:1rem;
letter-spacing:1px;
@media(max-width:768px){
  font-size:0.8rem

}

`
const H2 = styled.text`
font-size:1.5rem;
font-weight:bold;
color:white;
letter-spacing:1px;

@media(max-width:768px){
  font-size:1rem;
  text-align:flex-start;
  margin-bottom:5%;
}
`

export default function footer({ children, type, size }) {
  return (
    <Footer type={type} size={size}>
      <Container>
        <MainDiv>
          <DivRight>
            <H2>About</H2>
            <TextLink>
            In publishing and graphic design, Lorem ipsum is a placeholder
            Link commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.
            </TextLink>
            <h3>Built with ❤️ at GeekyAnts.</h3>
            <Icons>
              <Img src={"/fb.png"}></Img>
              <Img src={"/ln.png"}></Img>
              <Img src={"/tw.png"}></Img>
              <Img src={"/ig.png"}></Img>
            </Icons>
          </DivRight>

          <DivLeft>
            <Div1>
              <H2>Quick links</H2>
              <TextLink>Our Solutions</TextLink>
              <TextLink>Our Team</TextLink>
              <TextLink>FAQ</TextLink>
              <TextLink>Privacy Policy</TextLink>
              <TextLink>Contact Us</TextLink>
            </Div1>
            <Div1>
              <H2>More links</H2>
              <TextLink> GitLab</TextLink>
              <TextLink>Nginx</TextLink>
              <TextLink>Kubernetes</TextLink>
              <TextLink>Jenkins</TextLink>
              <TextLink>CentOS</TextLink>
            </Div1>

            <Div1>
              <H2>Contact</H2>
              <TextLink> Call: 08001-(Toll free)</TextLink>
              <TextLink>WhatsApp: 0817-76-</TextLink>
              <TextLink>info@gmail.com</TextLink>
            </Div1>
          </DivLeft>
        </MainDiv>
        <Line />
        <BottomDiv>
          <TextLink>© 2022 Yellowbees.io. All rights reserved.</TextLink>
        </BottomDiv>
      </Container>
    </Footer>
  );
}

/*  height: ${(props) => size[props.size].default}; */
