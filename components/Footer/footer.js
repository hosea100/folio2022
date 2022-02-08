import React from "react";
import styled from "styled-components";
import {
  RiLinkedinBoxLine,
  RiInstagramLine,
  RiTwitterLine,
  RiFacebookBoxLine,
  RiGithubFill,
} from "react-icons/ri";
// import { useRouter } from "next/router";

function Footer() {
  var moment = require("moment");

  return (
    <>
      <Wrapper>
        <Contact>
          <H3>CONTACT</H3>
          <Info>
            <P>Phone: ID (+62) 878 8514 8076</P>
            <P>Email: hoseayoarana@gmail.com </P>
          </Info>
        </Contact>
        <Social>
          <H3>FOLLOW ME</H3>
          <Ico>
            <StyledLink
              href="https://www.facebook.com/hosea.yoarana"
              target="_blank"
            >
              <RiFacebookBoxLine style={{ "font-size": `1.75rem` }} />
            </StyledLink>
            <StyledLink href="https://twitter.com/HoseaYoarana" target="_blank">
              <RiTwitterLine style={{ "font-size": `1.75rem` }} />
            </StyledLink>
            <StyledLink
              href="https://www.instagram.com/hosea_yoarana/?hl=en"
              target="_blank"
            >
              <RiInstagramLine style={{ "font-size": `1.75rem` }} />
            </StyledLink>
            <StyledLink
              href="https://www.linkedin.com/in/hosea-yoarana/"
              target="_blank"
            >
              <RiLinkedinBoxLine style={{ "font-size": `1.75rem` }} />
            </StyledLink>
            <StyledLink href="https://github.com/hosea100" target="_blank">
              <RiGithubFill style={{ "font-size": `1.75rem` }} />
            </StyledLink>
          </Ico>
        </Social>
        {/* <div className={`${styles.fromlabsFooter} d-flex col-12 wrap py-2`}>
        <div className="col-12 text-center py-2">
          <span className="">
            © Copyright FromLabs Pte. Ltd. {moment().year()} - www.fromlabs.com
          </span>
        </div>
      </div> */}
        {/* </div> */}
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  ::after {
    content: "";
    position: absolute;
    height: 3px;
    width: 77%;
    top: 0;
    background: #a09c9c;
  }

  position: relative;
  display: flex;
  flex-direction: row;
  margin-top: 10%;
  padding: 2% 10%;
  background-color: #fff;

  font-style: normal;
  justify-content: space-between;
`;

const H3 = styled.h3`
  font-family: "Helvetica-Bold";
  font-size: var(--fs-20);
  line-height: 162%;

  color: #000;
`;

const P = styled.p`
  font-family: "Helvetica";
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 14px;

  color: #000;
`;

const StyledLink = styled.a`
  padding-right: 15px;

  font-size: var(--fs-20);
  text-decoration: none;

  color: #000;
`;

const Contact = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`;

const Info = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;

  width: 80%;
`;

const Social = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`;

const Ico = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;

  width: 80%;
`;

export default Footer;
