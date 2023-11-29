"use client";
import React, { useEffect, useRef, useState } from "react";
import { getAllEmails } from "../services/api";

const Emails = () => {
  const [modal, setModal] = useState(false);
  const modalRef = useRef(null);
  const [mailList, setMailList] = useState([]);

  const [email, setEmail] = useState({
    tenant_id: "103",
    timestamp: "28/03/2023",
    subject: "Hello world, Welcome to India, bye bye, see you",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  });

  // FETCHING EMAILS
  const fetchEmails = async () => {
    try {
      const data = await getAllEmails();
      setMailList(data);
      console.log("H1");
    } catch (err) {
      console.log(err.message);
    }
  };
  // EMAIL MODAL HANDLER
  useEffect(() => {
    function onClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setModal(false);
        setEmail({});
      }
    }
    document.addEventListener("mousedown", onClickOutside);
    return () => {
      document.removeEventListener("mousedown", onClickOutside);
    };
  }, [modalRef]);

  //CALLING MAIL API
  fetchEmails();

  return (
    <div className="flex flex-col p-4 z-10">
      <div className="flex w-full border-b border-gray-100 mb-4">
        <div className="text-lg text-gray-700 w-1/4 me-4">ID</div>
        <div className="text-lg text-gray-700 w-1/4 me-4">Date</div>
        <div className="text-lg text-gray-700 w-1/4 me-4">Subject</div>
        <div className="text-lg text-gray-700 w-1/4">Body</div>
      </div>
      <div className="max-w-screen max-h-screen overflow-y-auto">
        {mailList &&
          mailList.length !== 0 &&
          mailList.map((item, key) => {
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
                    onClick={() => {
                      setModal(true);
                      setEmail(item);
                    }}
                  >
                    view
                  </button>
                </div>
              </div>
            );
          })}
        {mailList && mailList.length === 0 && (
          <div className="text-gray-500 text-center">No Emails to show</div>
        )}
        {/* Email modal on View Click Modal Start */}
        <div
          className={`${
            modal ? "flex" : "hidden"
          } absolute flex-col p-4 mx-auto left-0 right-0 mx-auto w-2/3 z-40 border border-gray-400 rounded-lg bg-white shadow-md shadow-gray-300`}
          ref={modalRef}
        >
          <div className="relative flex pb-1 flex-wrap -top-8 -right-8">
            <button
              className="absolute top-0 right-0 text-xl text-white font-bold bg-red-400 p-1 rounded-lg px-4 hover:scale-105 hover:shadow-red-500"
              onClick={() => {
                setModal(false);
                setEmail({});
              }}
            >
              x
            </button>
          </div>
          <div className="flex justify-between mb-6 pb-1 border-b border-gray-300">
            <h1 className="text-2xl">Tenant #{email.tenant_id}</h1>
            <h1 className="text-xl">
              Date -{" "}
              {/* {new Intl.DateTimeFormat("en-US").format(
                Date.parse(item.timestamp)
              )} */}
              {email.timestamp}
            </h1>
          </div>
          <div className="flex mb-6 pb-1 border-b border-gray-300 flex-wrap">
            <h1 className="text-2xl me-5">Subject:</h1>
            <p className="text-xl items-end flex">{email.subject}</p>
          </div>
          <div className="flex mb-6 pb-1 flex-wrap">
            <p className="text-lg">{email.body}</p>
          </div>
        </div>

        {/* Modal End */}
      </div>
    </div>
  );
};

export default Emails;
