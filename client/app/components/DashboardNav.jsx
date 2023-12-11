"use client";
import React from "react";
import { IoMailOpen } from "react-icons/io5";
const DashboardNav = () => {
  return (
    <div className="hidden md:flex w-fit min-h-fit flex-col border border-gray-400 rounded-md rounded-r-none">
      <div className="w-full h-fit p-4 bg-slate-200 rounded-md rounded-b-none rounded-r-none mb-6 ">
        <p className="text-xl">Settings</p>
      </div>
      <div className="px-4 flex flex-col w-full">
        <div className="flex w-full mb-4 hover:bg-gray-300 cursor-pointer text-center rounded-md p-2">
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

        <div className="flex w-full mb-4 hover:bg-gray-300 cursor-pointer text-center rounded-md p-2">
          <p className="me-4 text-2xl">
            <IoMailOpen />
          </p>
          <h1 className="text-xl">Emails</h1>
        </div>
        <div className="flex w-full mb-4 hover:bg-gray-300 cursor-pointer text-center rounded-md p-2">
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
        <div className="flex w-full mb-4 hover:bg-gray-300 cursor-pointer text-center rounded-md p-2">
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
  );
};

export default DashboardNav;
