"use client";
import React, { useEffect, useState } from "react";
import { getAllReports } from "../services/api";
import ReportCard from "./ReportCard";
import { IoArrowBackOutline } from "react-icons/io5";
const Reports = () => {
  const [reportList, setReportList] = useState([]);

  // FETCHING reportS
  const fetchReports = async () => {
    try {
      const data = await getAllReports();
      setReportList(data);
    } catch (err) {
      console.log(err.message);
    }
  };
  // report MODAL HANDLER
  useEffect(() => {
    //CALLING MAIL API
    fetchReports();
  }, []);

  return (
    <div className="relative flex flex-col min-h-full p-4 z-10">
      {/* MOBILE VIEW */}
      <div className="md:hidden flex flex-col  w-full h-full">
        <div className="md:hidden flex w-2/3 justify-between mb-6">
          <button
            className="bg-black text-white text-xl rounded-full p-2"
            onClick={() => {
              if (typeof window !== "undefined") window.location.reload();
            }}
          >
            <IoArrowBackOutline />
          </button>
          <h1 className="text-2xl font-bold">Reports</h1>
        </div>
        {reportList.length === 0 && (
          <p className="text-lg text-center text-gray-700">Loading Reports</p>
        )}
        <div className="flex flex-col overflow-y-scroll h-screen">
          {reportList.length !== 0 &&
            reportList.map((item, key) => {
              return <ReportCard key={key} report={item} />;
            })}
        </div>
      </div>
      {/* Desktop VIEW */}
      <div className="hidden md:flex w-full border-b border-gray-100 mb-4">
        <div className="text-lg text-gray-700 w-[17%] text-center  me-4">
          Tentant ID
        </div>
        <div className="text-lg text-gray-700 w-[17%] text-center  me-4">
          Tenant Name
        </div>
        <div className="text-lg text-gray-700 w-[17%] text-center  me-4">
          Owner Name
        </div>
        <div className="text-lg text-gray-700 w-[17%] text-center me-4">
          Property Address
        </div>
        <div className="text-lg text-gray-700 w-[17%] text-center me-4">
          Rent Amount {"(in Rs)"}
        </div>
        <div className="text-lg text-gray-700 me-4 w-[17%] text-center">
          Due Date
        </div>
      </div>
      <div className="hidden md:flex flex-col max-w-screen max-h-screen overflow-y-auto">
        {reportList &&
          reportList.length !== 0 &&
          reportList.map((item, key) => {
            return (
              <div
                className="flex w-full border-b border-gray-100 mb-4"
                key={key}
              >
                <div className="me-4 w-[17%] text-center">
                  {item.tenant_ref ? item.tenant_ref : "NA"}
                </div>
                <div className="me-4 w-[17%] text-center">
                  {item.tenant_name ? item.tenant_name : "NA"}
                </div>
                <div className="me-4 w-[17%] text-center">
                  {item.owner_name ? item.owner_name : "NA"}
                </div>
                <div className="me-4 w-[17%] text-center">
                  {item.property_desc ? item.property_desc : "NA"}
                </div>
                <div className="me-4 w-[17%] text-center">
                  {item.transaction_nett ? item.transaction_nett : "NA"}
                </div>
                <div className="w-[17%] text-center">
                  {item.transaction_due_date ? item.transaction_due_date : "NA"}
                </div>
              </div>
            );
          })}
        {reportList && reportList.length === 0 && (
          <div className="hidden md:static text-gray-500 text-center">
            Loading Reports...
          </div>
        )}
      </div>
    </div>
  );
};

export default Reports;
