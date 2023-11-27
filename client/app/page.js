import Image from "next/image";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Link from "next/link";
export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="flex flex-col h-screen bg-slate-200 items-center justify-center px-6">
        <div className="w-fit">
          <h1 className="text-4xl font-bold text-center">
            Welcome to Company <span className="text-red-400">X</span>YZ
          </h1>
        </div>
        <div className="w-2/3 md:w-1/4 mt-24">
          <button className="w-full mb-6 bg-red-400 p-2 text-white font-semibold hover:scale-105 hover:shadow-md hover:shadow-red-500 rounded-lg text-2xl">
            <Link href="/auth/login">Login</Link>
          </button>
          <h1 className="text-2xl font-bold text-center mb-6">OR</h1>
          <button className="w-full bg-red-400 p-2 text-white font-semibold hover:scale-105 hover:shadow-md hover:shadow-red-500 rounded-lg text-2xl">
            <Link href="/auth/register">Register</Link>
          </button>
        </div>
      </div>
      <Footer />
    </main>
  );
}
