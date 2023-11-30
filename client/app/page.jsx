import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Link from "next/link";
import NewNavbar from "./components/NewNavbar";
import {
  IoLogoWhatsapp,
  IoLogoFacebook,
  IoLogoLinkedin,
  IoLogoInstagram,
} from "react-icons/io5";

export default function Home() {
  return (
    <main>
      <NewNavbar />
      <div className="h-full flex flex-col font-sans pt-10 px-14 border-b border-black">
        {/* FIRST BANNER */}
        <div className="flex flex-col md:flex-row font-sans mb-20">
          <div className="flex flex-col md:w-1/2 justify-center pr-10">
            <h1 className="text-4xl md:text-5xl font-bold tracking-widest">
              Welcome to ART Management Services
            </h1>
            <p className="text-xl md:text-2xl font-thin my-6">
              Lease with Ease: Embrace the Automated Revolution in Real Estate!
            </p>
            <div className="flex mb-10 md:mb-0">
              <button className="rounded-lg bg-black text-white px-4 py-2 text-lg md:text-xl me-6">
                Start Browsing
              </button>
              <button className="rounded-full border-x-2 border-black  px-4 py-2 text-lg md:text-xl me-4">
                Get a demo
              </button>
            </div>
          </div>
          <div className="md:w-2/3 rounded-md">
            <img
              src="https://hips.hearstapps.com/hmg-prod/images/edc100121fernandez-005-1631202315.jpg?crop=1.00xw:0.594xh;0,0.256xh&resize=1200:*"
              alt="cover"
              className="rounded-md"
            />
          </div>
        </div>
        {/* SECOND BANNER */}
        <div className="flex flex-col md:flex-row font-sans mb-20">
          <div className="hidden md:flex md:w-2/3 h-1/2 rounded-md items-start">
            <img
              src="https://ramzyrealestate.com/storage/9963/basaksehir-avrasya-2-325-d16582451928531.jpeg"
              alt="cover"
              className="rounded-md"
            />
          </div>
          <div className="flex flex-col md:w-1/2 justify-center md:pl-10">
            <h1 className="text-4xl w-fit md:text-5xl font-bold tracking-widest">
              Find your perfect rental
            </h1>
            <p className="text-xl md:text-2xl font-thin my-6">
              Whether you’re searching for houses, apartments, or condos, it's
              easy to find a place you'll love.
            </p>
          </div>
          <div className="flex md:hidden md:w-2/3 rounded-md items-start">
            <img
              src="https://ramzyrealestate.com/storage/9963/basaksehir-avrasya-2-325-d16582451928531.jpeg"
              alt="cover"
              className="rounded-md"
            />
          </div>
        </div>
        {/* THIRD CONTACT BANNER */}
        <div className="flex flex-col items-center mb-20">
          <h1 className="text-4xl md:text-5xl font-bold w-fit">
            Talk to an AMS Agent now
          </h1>
          <p className="text-xl md:text-2xl font-thin my-6 w-fit">
            You’ll be connected with an expert local agent—there’s no pressure
            or obligation.
          </p>
          <div className="flex justify-center">
            <IoLogoWhatsapp className="text-4xl me-6 cursor-pointer" />
            <IoLogoLinkedin className="text-4xl me-6 cursor-pointer" />
            <IoLogoInstagram className="text-4xl me-6 cursor-pointer" />
            <IoLogoFacebook className="text-4xl cursor-pointer" />
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
