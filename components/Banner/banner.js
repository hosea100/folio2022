import React from "react";
import styled from "styled-components";

function banner() {
  return (
    <>
      <Wrapper>
        <div className="row">
          <div className="col-xl-5 col-12">
            <MyIntro>
              <MyName>Hosea Yoarana</MyName>
              <MyJob>
                Website Developer <br /> & Software Engineer
              </MyJob>
              <Intro>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum."
              </Intro>
            </MyIntro>
          </div>
          <div className="col-xl col-12">
            <MyPhoto>
              <img
                src="/assets/banner/myPhoto.jpg"
                alt="Hosea Yoarana"
                width="100%"
              />
            </MyPhoto>
          </div>
        </div>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  background-image: url(/assets/banner/bg.png);
  background-repeat: no-repeat;

  overflow: hidden;
  margin: 0 10%;

  font-style: normal;
  font-weight: normal;

  @media (max-width: 1919px) {
    position: relative;
  }
`;

const MyIntro = styled.p`
  position: absolute;
  bottom: 0;
  width: 50%;

  z-index: 1;
`;

const MyName = styled.p`
  font-family: "Helvetica";
  font-size: var(--fs-16);
  letter-spacing: 0.4em;

  color: #7d7d7d;
`;

const MyJob = styled.h2`
  font-family: "Helvetica-Bold";
  font-size: var(--fs-52);

  color: #000;
`;

const Intro = styled.h2`
  font-family: "Helvetica";
  font-size: var(--fs-16);

  color: #a3a3a3;
`;

const MyPhoto = styled.div`
  margin-left: 35%;

  aspect-ratio: 4/6;
`;

export default banner;