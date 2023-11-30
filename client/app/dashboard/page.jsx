"use client";
import React, { useState } from "react";
import DashItems from "../components/DashItems";
const Dashboard = () => {
  const [menu, setMenu] = useState("Emails");
  return (
    <div className="min-h-screen w-full flex pt-2 px-8 pb-4">
      <div className="hidden md:flex w-fit min-h-fit flex-col border border-gray-400 rounded-md rounded-r-none">
        <div className="w-full h-fit p-4 bg-black text-white rounded-md rounded-b-none rounded-r-none mb-6 ">
          <p className="text-xl">Settings</p>
        </div>
        <div className="px-4 flex flex-col w-full">
          <div
            className="flex w-full mb-4 hover:bg-gray-300 cursor-pointer text-center rounded-md p-2"
            onClick={() => setMenu("Reports")}
          >
            <p className="me-4">
              <img
                width="30"
                height="30"
                src="https://img.icons8.com/ios/50/graph-report.png"
                alt="graph-report"
              />
            </p>
            <h1 className="text-xl">Reports</h1>
          </div>

          <div
            className="flex w-full mb-4 hover:bg-gray-300 cursor-pointer text-center rounded-md p-2"
            onClick={() => setMenu("Emails")}
          >
            <p className="me-4">
              <img
                width="30"
                height="30"
                src="https://img.icons8.com/ios/50/new-post--v1.png"
                alt="new-post--v1"
              />
            </p>
            <h1 className="text-xl">Emails</h1>
          </div>
          <div
            className="flex w-full mb-4 hover:bg-gray-300 cursor-pointer text-center rounded-md p-2"
            onClick={() => setMenu("Domains")}
          >
            <p className="me-4">
              <img
                width="60"
                height="60"
                src="https://img.icons8.com/ios/50/globe--v1.png"
                alt="globe--v1"
              />
            </p>
            <h1 className="text-xl">Domains</h1>
          </div>
          <div
            className="flex w-full mb-4 hover:bg-gray-300 cursor-pointer text-center rounded-md p-2"
            onClick={() => setMenu("Billings")}
          >
            <p className="me-4">
              <img
                width="30"
                height="30"
                src="https://img.icons8.com/ios/50/bill.png"
                alt="bill"
              />
            </p>
            <h1 className="text-xl">Billing</h1>
          </div>
        </div>
      </div>
      <DashItems menu={menu} />
    </div>
  );
};

export default Dashboard;
