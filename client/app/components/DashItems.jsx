import React from "react";
import Emails from "./Emails";

const DashItems = ({ menu }) => {
  return (
    <div className="w-full min-h-fit overflow-y-auto rounded-md rounded-l-none border border-gray-400 border-l-0">
      <div className="w-full p-4 h-fit bg-slate-200 rounded-md rounded-l-none rounded-b-none">
        <p className="text-xl">{menu}</p>
      </div>
      {menu === "Emails" ? <Emails /> : <></>}
    </div>
  );
};

export default DashItems;
