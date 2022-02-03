import "./global.css";
import "./global.scss";
import Layout from "../components/Layout";
import CookieConsent from "react-cookie-consent";

const Root = ({ Component, pageProps }) => {

  return (
    <Layout>
      <CookieConsent
        debug={true}
        location="bottom"
        cookieName="siteCookies"
        buttonText="Agree"
        style={{ background: "#FFF" }}
        buttonStyle={{
          background: "#00CC8E",
          color: "#FFF",
          fontSize: "16px",
          borderRadius: "25px",
          width: "120px",
        }}
        contentStyle={{ color: "#000" }}
        expires={2}
      >
        This website uses cookies to improve your experience in our site and
        giving you the most relevant information
      </CookieConsent>
      <Component {...pageProps} />
    </Layout>
  );
};

export default Root;
