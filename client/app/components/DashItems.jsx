import React from "react";
import Emails from "./Emails";
import Reports from "./Reports";
const DashItems = ({ menu }) => {
  return (
    <div className="w-full min-h-fit rounded-md rounded-l-none border border-gray-400 border-l-0">
      <div className="w-full p-4 h-fit bg-black text-white rounded-md rounded-l-none rounded-b-none">
        <p className="text-xl">{menu}</p>
      </div>
      {menu === "Emails" ? (
        <Emails />
      ) : menu === "Tenants" ? (
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
