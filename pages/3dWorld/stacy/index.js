
import React from "react";
import styled from "styled-components";
import StacyCanvas from "../../../components/3dTest/stacy/canvas";

export default function Stacy() {
  return (
    <StyledDiv>
      <StacyCanvas />
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  position: relative;
  width: 1280px;
  height: 720px;

  margin: 0 auto;
`;
