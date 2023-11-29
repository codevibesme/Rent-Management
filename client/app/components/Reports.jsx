"use client";
import React, { useEffect, useRef, useState } from "react";
import { getAllReports } from "../services/api";

const Reports = () => {
  const [modal, setModal] = useState(false);
  const modalRef = useRef(null);
  const [reportList, setReportList] = useState([]);
  const [report, setReport] = useState({});

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
    function onClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setModal(false);
        setReport({});
      }
    }
    document.addEventListener("mousedown", onClickOutside);
    return () => {
      document.removeEventListener("mousedown", onClickOutside);
    };
  }, [modalRef]);

  return (
    <div className="overflow-y-auto relative flex flex-col min-h-full p-4 z-10">
      <div className="flex w-full border-b border-gray-100 mb-4">
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
      <div className="max-w-screen max-h-screen overflow-y-auto">
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
          <div className="text-gray-500 text-center">Loading Reports...</div>
        )}
      </div>
    </div>
  );
};

export default Reports;
