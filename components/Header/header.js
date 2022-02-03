import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Link from "next/link";
import MobileDrawer from "./mobileDrawer/mobile-drawer";

const Header = () => {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
  });

  return (
    <Nav
      style={{
        backdropFilter: navbar ? "blur(20px)" : "none",
      }}
    >
      <StyledLogo>
        <Link href="/" passHref>
          <img
            src="/assets/header/logo.svg"
            alt="Our3d Space"
            className="align-self-baseline"
          />
        </Link>
      </StyledLogo>
      <StyledLink>
        <Link href="/about" passHref>
          <StyledText>About</StyledText>
        </Link>
        <Link href="/projects" passHref>
          <StyledText>Projects</StyledText>
        </Link>
        {/* <Link href="/contact-us" passHref>
          <ButtonContactUs>Contact Us</ButtonContactUs>
        </Link> */}
      </StyledLink>
      <StyledDrawer>
        <MobileDrawer />
      </StyledDrawer>
    </Nav>
  );
};

const Nav = styled.nav`
  background: transparent;
  min-height: 4.166666666666667vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  position: sticky;
  top: 0;
  z-index: 999;

  font-family: "Helvetica-Bold";
  font-style: normal;
  font-weight: normal;
  font-size: var(--fs-16);
`;

const StyledDrawer = styled.nav`
  overflow: hidden;
  z-index: 1;
  position: static;
  @media screen and (min-width: 1027px) {
    display: none;
  }
`;

const StyledLogo = styled.a`
  cursor: pointer;
  img {
    margin: 5% 0;
    padding: 0 0 0 5rem;
    min-height: 2.7083333333333335vw;
    min-width: 14.583333333333334vw;
    z-index: -1;
  }

  @media screen and (max-width: 1026px) {
    img {
      margin: 5% auto;
    }
  }

  @media screen and (max-width: 512px) {
    img {
      padding: 0;
      margin: 5% 25%;
    }
  }

  @media screen and (max-width: 390px) {
    img {
      padding: 0;
      margin: 0 50%;
      max-height: 100%;
      width: 50%;
      transform: scale(1.5);
    }
  }

  @media screen and (max-width: 350px) {
    img {
      margin: 0 75%;
      width: 25%;
      transform: scale(2);
    }
  }

  @media screen and (max-width: 320px) {
    img {
      margin: 0 100%;
      width: 50px;
    }
  }
`;

const StyledLink = styled.a`
  text-decoration: none !important;
  margin: 0 5em;
`;

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

const ButtonContactUs = styled.button`
  &:hover {
    color: #ffffff;
    background: #55833b;
  }

  border-radius: 4rem;
  border: none;
  background: #f7941d;
  transition: 0.5s ease-in-out;

  color: #ffffff;
  margin: 0 1em;
  padding: 0.5em 1.5em;

  @media screen and (max-width: 1152px) {
    font-size: 14px;
    max-width: 140px;
    max-height: 48px;
  }
  @media screen and (max-width: 1134px) and (min-width: 1133px) {
    font-size: 12px;
  }
  @media screen and (max-width: 1026px) {
    display: none;
  }
`;

// const StyledSearch = styled.a`
//   &:hover {
//     color: #55833B;
//     cursor: pointer;
//   }

//   img {
//     padding: 0 5rem 0 1rem;
//     height: auto;
//     width: auto;
//     max-width: 300px;
//     max-height: 300px;
//   }

//   @media screen and (max-width: 1026px) {
//     img {
//       padding: 0 2rem 0 1rem;
//     }
//   }
// `;

export default Header;
