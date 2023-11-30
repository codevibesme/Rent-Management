"use client";
import React from "react";
import { useRouter } from "next/navigation";
const Logo = () => {
  const router = useRouter();
  return (
    <div className="flex" onClick={() => router.push("/")}>
      <img
        src="/assets/Logo.png"
        alt="Logo"
        loading="lazy"
        className="w-12 me-2"
      />
      <p className="text-2xl font-sans font-bold flex items-center me-12">AMS</p>
    </div>
  );
};

export default Logo;
