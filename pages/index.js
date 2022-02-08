import Head from "next/head";
import Main from "../components/Main";
import SEO from "../components/seo";
import Banner from "../components/Banner/banner";
import ThreeBanner from "../components/3dTest/ThreeBanner";
import ThreeDWorld from "./3dWorld";

export default function Home() {
  return (
    <>
      <Main>
        <SEO />
        <Banner />
        {/* <ThreeBanner /> */}
        <ThreeDWorld />
      </Main>
    </>
  );
}
