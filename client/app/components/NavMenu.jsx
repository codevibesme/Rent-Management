"use client";
import React from "react";
import { useRouter } from "next/navigation";
const NavMenu = () => {
  const router = useRouter();
  return (
    <div className="flex font-sans flex-col absolute top-8 -left-8 bg-white rounded-lg rounded-tl-none md:static md:flex-row p-2 md:p-0 md:rounded-none z-40">
      <div
        className="text-xl cursor-pointer flex items-center me-6 mb-4 md:mb-0"
        onClick={() => router.push("/")}
      >
        Home
      </div>
      <div
        className="text-xl cursor-pointer flex items-center me-6 mb-4 md:mb-0"
        onClick={() => router.push("/dashboard")}
      >
        Dashboard
      </div>
      <div
        className="text-xl cursor-pointer flex items-center me-6 mb-4 md:mb-0"
        onClick={() => router.push("/pricing")}
      >
        Pricing
      </div>
      <div
        className="text-xl cursor-pointer flex items-center"
        onClick={() => router.push("/contact")}
      >
        Contact
      </div>
    </div>
  );
};

export default NavMenu;
