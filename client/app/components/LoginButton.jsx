"use client";
import React from "react";
import { useRouter } from "next/navigation";
const LoginButton = () => {
  const router = useRouter();
  return (
    <div className="font-sans flex items-center">
      <button
        className="border border-black hover:bg-black hover:text-white text-xl px-4 py-2 rounded-md hover:shadow-gray-500/50"
        onClick={() => router.push("/auth/login")}
      >
        Sign in
      </button>
    </div>
  );
};

export default LoginButton;
