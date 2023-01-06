import { useState } from "react";
import React, { button } from "react";
import styled from "styled-components";


const Div = styled.div`
  background-color: #fafafa;
  width: 80%;
  margin: 1%;
  border-radius:2px;
`;

const Button = styled.button`
  width: 100%;
  position: relative;
  text-align: left;
  border: none;
  background: transparent;
  outline: none;
  cursor: pointer;
  color: black;
  padding: 2%;
`;

export default function Accordion(props) {
  const [pressed, setPressed] = useState(false);

  const Toggle = () => {
    setPressed(!pressed);
  };

  return (
    <Div>
      <Button onClick={Toggle} type="button">
        <h2>
          {props.title}{" "}
          {pressed ? (
            <img src={"./up.png"} style={{float:"right"}}></img>
          ) : (
            <img src={"./down.png"} style={{float:"right"}}></img>
          )}{" "}
        </h2>
      </Button>
      <div style={{ display: pressed ? "block" : "none", padding: "2%" }}>
        <text style={{ color: "black" }}>{props.content}</text>
      </div>
    </Div>
  );
}
