import React from "react";
import Emails from "./Emails";
import Reports from "./Reports";
const DashItems = ({ menu }) => {
  return (
    <div className="md:block w-full min-h-fit md:rounded-md md:rounded-l-none md:border md:border-gray-400 md:border-l-0">
      <div className="hidden md:block w-full p-4 h-fit bg-black text-white rounded-md rounded-l-none rounded-b-none">
        <p className="text-xl">{menu}</p>
      </div>
      {menu === "Emails" ? (
        <Emails />
      ) : menu === "Reports" ? (
        <Reports />
      ) : (
        <h1 className="text-2xl text-center text-gray-700 mt-24">
          COMING SOON
        </h1>
      )}
    </div>
  );
};

export default DashItems;
