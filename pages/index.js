import Head from "next/head";
import Main from "../components/Main";
import SEO from "../components/seo";
import Banner from "../components/Banner/banner";

export default function Home() {
  return (
    <>
      <SEO />
      <Banner />
      <Main />
    </>
  );
}
