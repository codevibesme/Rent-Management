"use client";
import React, { useState } from "react";
import Logo from "./Logo";
import NavMenu from "./NavMenu";
import LoginButton from "./LoginButton";
import { IoMenuOutline } from "react-icons/io5";

const NewNavbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="w-full h-fit flex justify-between px-8 py-4">
      <div className="hidden md:flex">
        <Logo />
        <NavMenu />
      </div>
      <div className="md:hidden flex items-center justify-between w-2/3">
        <div className="relative flex flex-col">
          <IoMenuOutline
            className="text-2xl"
            onClick={() => setShowMenu(!showMenu)}
          />
          {showMenu && <NavMenu />}
        </div>
        <Logo />
      </div>
      <LoginButton />
    </div>
  );
};

export default NewNavbar;
