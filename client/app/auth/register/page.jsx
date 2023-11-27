"use client";
import React, { useState } from "react";
import Link from "next/link";
const RegisterPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleRegister = async () => {
    e.preventDefault();
  };

  return (
    <div className="px-4 relative bg-slate-200 flex flex-col justify-center items-center pt-10 pb-10  overflow-hidden">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-red-400 uppercase">
          Sign up
        </h1>
        <form className="mt-5" onSubmit={handleRegister}>
          <div className="mb-2">
            <label
              htmlFor="name"
              className="block text-sm font-semibold text-gray-800"
            >
              Name
            </label>
            <div className="flex flex-col items-start">
              <input
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                name="name"
                className="block w-full px-4 py-2 mt-2 text-red-400 bg-white border rounded-md focus:border-red-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
          </div>
          <div className="mb-2">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-800"
            >
              Email
            </label>
            <div className="flex flex-col items-start">
              <input
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                name="email"
                className="block w-full px-4 py-2 mt-2 text-red-400 bg-white border rounded-md focus:border-red-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
          </div>
          <div className="mb-2">
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-gray-800"
            >
              Password
            </label>
            <div className="flex flex-col items-start">
              <input
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                name="password"
                className="block w-full px-4 py-2 mt-2 text-red-400 bg-white border rounded-md focus:border-red-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
          </div>
          <div className="mb-2">
            <label
              htmlFor="password_confirmation"
              className="block text-sm font-semibold text-gray-800"
            >
              Confirm Password
            </label>
            <div className="flex flex-col items-start">
              <input
                required
                type="password"
                name="password_confirmation"
                className="block w-full px-4 py-2 mt-2 text-red-400 bg-white border rounded-md focus:border-red-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
          </div>

          <div className="flex items-center mt-6">
            <button
              type="submit"
              className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-red-500 rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600"
            >
              Register
            </button>
          </div>
        </form>

        <p className="mt-8 text-xs font-light text-center text-gray-700">
          {" "}
          Already have an account?{" "}
          <Link
            href="/auth/login"
            className="font-medium text-red-600 hover:underline"
          >
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
