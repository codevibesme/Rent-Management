"use client";
import React, { useEffect, useState } from "react";
import { getAllEmails } from "../services/api";
import EmailCard from "./EmailCard";
import { IoArrowBackOutline } from "react-icons/io5";
import EmailList from "./EmailList";

const Emails = () => {
  const [mailList, setMailList] = useState([]);
  // FETCHING EMAILS
  const fetchEmails = async () => {
    try {
      const data = await getAllEmails();

      setMailList(data);
    } catch (err) {
      console.log(err.message);
    }
  };
  // EMAIL MODAL HANDLER
  useEffect(() => {
    //CALLING MAIL API
    fetchEmails();
  }, []);

  return (
    <div className="w-full relative flex flex-col min-h-full p-4 z-10 overflow-x-auto">
      {/* MOBILE VIEW
      <div className="md:hidden flex flex-col w-full h-full">
        <div className="md:hidden flex w-2/3 justify-between mb-6">
          <button
            className="bg-black text-white text-xl rounded-full p-2"
            onClick={() => {
              if (typeof window !== "undefined") window.location.reload();
            }}
          >
            <IoArrowBackOutline />
          </button>
          <h1 className="text-2xl font-bold">Emails</h1>
        </div>
        {mailList.length === 0 && (
          <p className="text-lg text-center text-gray-700">Loading Emails</p>
        )}
        <div className="overflow-y-scroll flex flex-col h-screen">
          {mailList.length !== 0 &&
            mailList.map((item, key) => {
              return <EmailCard key={key} email={item} />;
            })}
        </div>
      </div> */}
      {/* DESKTOP VIEW */}
      {mailList.length === 0 ? (
        <p className="text-xl text-gray-700 text-center mt-10">
          Loading Emails...
        </p>
      ) : (
        <EmailList mailList={mailList} />
      )}
    </div>
  );
};

export default Emails;
