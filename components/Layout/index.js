import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../Footer/footer";
import Header from "../Header/header";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
