import React from "react";
import Link from "next/link";
import styled from "styled-components";

function ThreeDWorld() {
  return (
    <div className="container justify-content-center text-center mb-5">
      <h1>3D World</h1>
      <Link href="/3dWorld/stacy">
        <StyledText>See Stacy at FullScreen!</StyledText>
      </Link>
      <Link href="/3dWorld/room1">
        <StyledText>See My Room at FullScreen!</StyledText>
      </Link>
    </div>
  );
}

const StyledText = styled.a`
  &:hover {
    color: #c8d938;
    text-shadow: 2px 2px 3px rgb(22, 56, 19);
    cursor: pointer;
  }

  text-decoration: none !important;
  transition: 0.5s ease-in-out;
  padding: 0rem calc(2rem + var(--fs-16));

  color: #00cc8e;
  text-shadow: 2px 2px 3px rgb(162, 186, 4);

  @media screen and (max-width: 1374px) {
    padding: 0 50px 0 50px;
  }
  @media screen and (max-width: 1292px) {
    padding: 0 30px 0 30px;
  }
  @media screen and (max-width: 1132px) {
    font-size: 14px;
  }
  @media screen and (max-width: 1096px) {
    padding: 0 20px 0 20px;
  }
  @media screen and (max-width: 1026px) {
    display: none;
  }
`;

export default ThreeDWorld;
