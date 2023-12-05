"use client";
import React, { useEffect, useState } from "react";
import { getAllReports } from "../services/api";
import ReportCard from "./ReportCard";
import { IoArrowBackOutline } from "react-icons/io5";
import ReportList from "./ReportList";
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
    <div className="relative flex flex-col min-h-full w-full p-4 z-10 overflow-x-auto">
      {/* MOBILE VIEW
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
      </div> */}
      {/* Desktop VIEW */}
      {reportList.length !== 0 ? (
        <ReportList reportList={reportList} />
      ) : (
        <p className="text-xl text-gray-700 text-center mt-10">
          Loading Tenants...
        </p>
      )}
    </div>
  );
};

export default Reports;
