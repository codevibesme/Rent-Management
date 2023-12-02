import Footer from "../components/Footer";
import NewNavbar from "../components/NewNavbar";
export default function Layout({ children }) {
  return (
    <div className="min-h-fit w-full">
      <NewNavbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
