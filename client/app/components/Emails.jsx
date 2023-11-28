"use client";
import React, { useState } from "react";
const fetchEmails = async () => {
  let new_mail_list = [];
  try {
    const response = await fetch(
      "https://property-api.innovaciotech.com/api/emails",
      { cache: "no-store" }
    );
    new_mail_list = await response.json();
    return new_mail_list;
  } catch (err) {
    console.log(err);
  }
  return new_mail_list;
};
const Emails = async () => {
  const mail_list = await fetchEmails();

  return (
    <div className="flex flex-col p-4">
      <div className="flex w-full border-b border-gray-100 mb-4">
        <div className="text-lg text-gray-700 w-1/4 me-4">ID</div>
        <div className="text-lg text-gray-700 w-1/4 me-4">Date</div>
        <div className="text-lg text-gray-700 w-1/4 me-4">Subject</div>
        <div className="text-lg text-gray-700 w-1/4">Body</div>
      </div>
      <div className="max-w-screen max-h-screen overflow-y-auto">
        {mail_list &&
          mail_list.map((item, key) => {
            return (
              <div
                className="flex w-full border-b border-gray-100 mb-4"
                key={key}
              >
                <div className="w-1/4 me-4">{item.tenant_id}</div>
                <div className="w-1/4 me-4">
                  {new Intl.DateTimeFormat("en-US").format(
                    Date.parse(item.timestamp)
                  )}
                </div>
                <div className="w-1/4 me-4">{item.subject}</div>
                <div className="w-1/4">{item.body.slice(0, 30)}...</div>
                <div className="w-fit p-1">
                  <button
                    className="bg-red-400 text-white text-lg p-1 rounded-md hover:shadow-red-200 hover:scale-105"
                    // onClick={() => {
                    //   setEmail(mail_list[key]);
                    //   console.log(mail_list[key]);
                    //   setShowModal(true);
                    // }}
                  >
                    view
                  </button>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Emails;
