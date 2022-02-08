import React from "react";
import styled from "styled-components";
import Room1Canvas from "../../../components/3dTest/room1/canvas";

export default function Stacy() {
  return (
      <StyledDiv>
        <Room1Canvas />
      </StyledDiv>
  );
}

const StyledDiv = styled.div`
  position: relative;
  width: 1280px;
  height: 720px;

  margin: 0 auto;
`;
