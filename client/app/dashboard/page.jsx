"use client";
import React, { useState } from "react";
import DashItems from "../components/DashItems";
const Dashboard = () => {
  const [menu, setMenu] = useState("Emails");
  return (
    <div className="min-h-screen w-full flex pt-2 px-8 pb-4">
      <div className="hidden md:flex w-fit min-h-fit flex-col border border-gray-400 rounded-md rounded-r-none">
        <div className="w-full h-fit p-4 bg-slate-200 rounded-md rounded-b-none rounded-r-none mb-6 ">
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
{
  /* <div className="flex flex-col w-full">
        <div>
          <h1 className="text-3xl font-bold mb-10">Email Logs:</h1>

          <div className="flex flex-col w-full bg-white rounded-lg shadow-lg p-4">
            <div className="flex w-full  text-center mb-6  font-bold text-2xl ">
              <h1 className="w-1/4  me-6">Id</h1>
              <h1 className="w-1/4  me-6">Name</h1>
              <h1 className="w-1/4  me-6">Email Id</h1>
              <h1 className="w-1/4  ">Message</h1>
            </div>
            <div className="h-screen overflow-y-auto flex flex-col w-full">
              {email_list.map((item, key) => {
                return (
                  <div
                    key={key}
                    className="flex w-full  text-center mb-6 border-slate-400 border rounded-lg justify-center items-center"
                  >
                    <h1 className="w-1/4 text-xl me-6">{item.tenant_id}</h1>
                    <h1 className="w-1/4 text-xl me-6">{item.recipent}</h1>
                    <h1 className="w-1/4 text-xl me-6">{item.emailId}</h1>
                    <h1 className="w-1/4 text-xl">
                      {item.message.slice(0, 100)}...
                    </h1>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div> */
}
