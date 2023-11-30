import Footer from "../components/Footer";
import NewNavbar from "../components/NewNavbar";
export default function Layout({ children }) {
  return (
    <>
      <NewNavbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
