"use client";
import React, { useEffect, useRef, useState } from "react";
import { getAllEmails } from "../services/api";
import EmailCard from "./EmailCard";
import { IoArrowBackOutline } from "react-icons/io5";

const Emails = () => {
  const [modal, setModal] = useState(false);
  const modalRef = useRef(null);
  const [mailList, setMailList] = useState([]);
  const [email, setEmail] = useState({});
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

  return (
    <div className="relative flex flex-col min-h-full p-4 z-10">
      {/* MOBILE VIEW */}
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
      </div>
      {/* DESKTOP VIEW */}
      <div className="hidden md:flex w-full border-b border-gray-100 mb-4">
        <div className="text-lg text-gray-700 w-1/4 me-4">ID</div>
        <div className="text-lg text-gray-700 w-1/4 me-4">Date</div>
        <div className="text-lg text-gray-700 w-1/4 me-4">Subject</div>
        <div className="text-lg text-gray-700 w-1/4">Body</div>
      </div>
      <div className="hidden md:block max-w-screen max-h-screen overflow-y-auto">
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
                    className="bg-black text-white text-white text-lg p-1 rounded-md px-2 py-1"
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
          <div className="text-gray-500 text-center">Loading Emails...</div>
        )}
        {/* Email modal on View Click Modal Start */}
        <div
          className={`${
            modal ? "flex" : "hidden"
          } absolute h-fit flex-col p-4 mx-auto top-10 bottom-0  left-0 right-0 mx-auto w-2/3 z-40 border border-gray-400 rounded-lg bg-white shadow-md shadow-gray-300`}
          ref={modalRef}
        >
          <div className="relative flex pb-1 flex-wrap -top-8 -right-8">
            <button
              className="absolute top-0 right-0 text-xl text-white font-bold bg-black text-white p-1 rounded-lg px-4"
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
              {email?.timestamp &&
                new Intl.DateTimeFormat("en-US").format(
                  Date.parse(email.timestamp)
                )}
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
