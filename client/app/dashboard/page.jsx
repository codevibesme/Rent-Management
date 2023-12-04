"use client";
import React, { useEffect, useState } from "react";
import DashItems from "../components/DashItems";
const Dashboard = () => {
  const [menu, setMenu] = useState("Emails");
  const [show, setShow] = useState(false);
  const [width, setWidth] = useState(null);
  useEffect(() => {
    if (typeof window !== "undefined") setWidth(window.innerWidth);
    setShow(false);
  }, [width]);
  return (
    <div className="min-h-screen w-full flex pt-4 items-stretch px-8 pb-4 border-b border-black">
      {/* <div
        className={`md:hidden ${
          !show ? "flex" : "hidden"
        } flex-col w-full h-full px-4 py-6 items-center justify-center items-center`}
      >
      
        <div
          className="flex flex-col px-4 py-2 items-center shadow-lg shadow-gray-400 rounded-lg z-40 mb-6 justify-stretch"
          onClick={() => {
            setMenu("Reports");
            setShow(true);
          }}
        >
          <div className="flex justify-center mb-2">
            <img
              width="75"
              height="75"
              src="https://img.icons8.com/ios/50/graph-report.png"
              alt="graph-report"
            />
          </div>
          <h1 className="text-xl">Reports</h1>
        </div>
        
        <div
          className="flex flex-col px-4 py-2 items-center shadow-lg shadow-gray-400 rounded-lg z-40 mb-6"
          onClick={() => {
            setMenu("Emails");
            setShow(true);
          }}
        >
          <div className="flex justify-center mb-2">
            <img
              width="75"
              height="75"
              src="https://img.icons8.com/ios/50/new-post--v1.png"
              alt="new-post--v1"
            />
          </div>
          <h1 className="text-xl">Emails</h1>
        </div>

       
        <div
          className="flex flex-col px-4 py-2 items-center shadow-lg shadow-gray-400 rounded-lg z-40 mb-6"
          onClick={() => {
            setMenu("Domains");
            setShow(true);
          }}
        >
          <div className="flex justify-center mb-2">
            <img
              width="75"
              height="75"
              src="https://img.icons8.com/ios/50/globe--v1.png"
              alt="globe--v1"
            />
          </div>
          <h1 className="text-xl">Domains</h1>
        </div>
       
        <div
          className="flex flex-col px-4 py-2 items-center shadow-lg shadow-gray-400 rounded-lg z-40"
          onClick={() => {
            setMenu("Billings");
            setShow(true);
          }}
        >
          <div className="flex justify-center mb-2">
            <img
              width="75"
              height="75"
              src="https://img.icons8.com/ios/50/bill.png"
              alt="bill"
            />
          </div>
          <h1 className="text-xl">Billings</h1>
        </div>
      </div> */}

      {/* DESKTOP UI */}
      <div className="flex w-fit min-h-fit flex-col border border-gray-400 rounded-md rounded-r-none">
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
            <h1 className="text-xl">Tenants</h1>
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
      {/* {width && width >= 767 && <DashItems menu={menu} />}
      {width && width < 767 && show && <DashItems menu={menu} />} */}
    </div>
  );
};

export default Dashboard;
