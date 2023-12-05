"use client";
import React, { useEffect, useState } from "react";
const EmailList = ({ mailList }) => {
  const [emails, setEmails] = useState([]);
  const [query, setQuery] = useState("");
  useEffect(() => {
    setEmails(mailList);
  }, [mailList]);
  const sortFields = (field, dir) => {
    let arr = mailList;
    console.log(arr);
    arr.sort(function (a, b) {
      let x, y;
      if (field === "tenant_id") {
        x = Math.floor(a[field].split("/").join(""));
        y = Math.floor(b[field].split("/").join(""));
      } else if (field === "timestamp") {
        x = new Date(a[field]);
        y = new Date(b[field]);
      } else if (field === "transaction_nett") {
        x = Math.floor(a[field].split(",").join(""));
        y = Math.floor(b[field].split(",").join(""));
      }
      if (dir == "down") return y - x;
      else return x - y;
    });

    setEmails([...arr]);
  };

  // Search fields
  const handleSearch = (e) => {
    e.preventDefault();
    if (mailList.length !== 0) {
      const filteredArray = mailList.filter((item) => {
        return item["tenant_email"].toLowerCase().includes(query.toLowerCase());
      });
      setEmails(filteredArray);
    }
  };
  const handleDynamicSearch = (e) => {
    setQuery(e.target.value);
    if (mailList.length !== 0) {
      const filteredArray = mailList.filter((item) => {
        return item["tenant_email"]
          .toLowerCase()
          .includes(e.target.value.toLowerCase());
      });
      setEmails(filteredArray);
    }
  };
  return (
    <div className="relative w-full h-screen overflow-y-auto">
      <form
        className="w-full flex justify-between mb-6"
        onSubmit={handleSearch}
      >
        <input
          className="text-xl rounded-md px-4 py-2 outline-none border border-gray-400 w-4/5"
          placeholder="Search tenant emails..."
          value={query}
          onChange={handleDynamicSearch}
        />
        <button
          type="submit"
          className="rounded-lg bg-black  p-2 uppercase text-white"
        >
          search
        </button>
      </form>
      {emails.length === 0 ? (
        <p className="text-xl text-gray-700 text-center mt-10">
          No results found...
        </p>
      ) : (
        <table className="w-full border border-black">
          <thead className="sticky top-0 bg-white z-40 uppercase border border-black over-flow-x-auto">
            <tr className="border border-black">
              <th scope="col" className="px-4 py-2 border border-black">
                <div className="flex justify-between w-full">
                  <p>id</p>
                  <div className="flex flex-col justify-between">
                    <button
                      className="text-[0.6rem]"
                      onClick={() => sortFields("tenant_id", "up")}
                    >
                      &#9650;
                    </button>
                    <button
                      className="text-[0.6rem]"
                      onClick={() => sortFields("tenant_id", "down")}
                    >
                      &#9660;
                    </button>
                  </div>
                </div>
              </th>

              <th scope="col" className="px-4 py-2 border border-black">
                <div className="flex justify-between w-full">
                  <p>date</p>
                  <div className="flex flex-col justify-between">
                    <button
                      className="text-[0.6rem]"
                      onClick={() => sortFields("timestamp", "up")}
                    >
                      &#9650;
                    </button>
                    <button
                      className="text-[0.6rem]"
                      onClick={() => sortFields("timestamp", "down")}
                    >
                      &#9660;
                    </button>
                  </div>
                </div>
              </th>
              <th scope="col" className="px-4 py-2 border border-black">
                email
              </th>
              <th scope="col" className="px-4 py-2 border border-black">
                subject
              </th>
              <th scope="col" className="px-4 py-2 border border-black">
                body
              </th>
            </tr>
          </thead>
          <tbody className="w-full overflow-y-auto overflow-x-auto">
            {emails.map((item, idx) => {
              return (
                <tr className="border border-black" key={idx}>
                  <td className="px-4 py-2 border border-black">
                    {item.tenant_id}
                  </td>
                  <td className="px-4 py-2 border border-black">
                    {new Intl.DateTimeFormat("en-US").format(
                      Date.parse(item.timestamp)
                    )}
                  </td>
                  <td className="px-4 py-2 border border-black">
                    {item.tenant_email}
                  </td>
                  <td className="px-4 py-2 border border-black">
                    {item.subject}
                  </td>
                  <td className="px-4 py-2 border border-black">
                    {/* {item.body.slice(0, 30)}... */}
                    {item.body}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default EmailList;

// MODALS
// function onClickOutside(event) {
//   if (modalRef.current && !modalRef.current.contains(event.target)) {
//     setModal(false);
//     setEmail({});
//   }
// }
// document.addEventListener("mousedown", onClickOutside);
// return () => {
//   document.removeEventListener("mousedown", onClickOutside);
// };

// <>
//   <div className="hidden md:flex w-full border-b border-gray-100 mb-4">
//     <div className="text-lg text-gray-700 w-1/4 me-4">ID</div>
//     <div className="text-lg text-gray-700 w-1/4 me-4">Date</div>
//     <div className="text-lg text-gray-700 w-1/4 me-4">Subject</div>
//     <div className="text-lg text-gray-700 w-1/4">Body</div>
//   </div>
//   <div className="hidden md:block max-w-screen max-h-screen overflow-y-auto">
//     {mails &&
//       mails.length !== 0 &&
//       mails.map((item, key) => {
//         return (
//           <div
//             className="flex w-full border-b border-gray-100 mb-4"
//             key={key}
//           >
//             <div className="w-1/4 me-4">{item.tenant_id}</div>
//             <div className="w-1/4 me-4">
//               {new Intl.DateTimeFormat("en-US").format(
//                 Date.parse(item.timestamp)
//               )}
//             </div>
//             <div className="w-1/4 me-4">{item.subject}</div>
//             <div className="w-1/4">{item.body.slice(0, 30)}...</div>
//             <div className="w-fit p-1">
//               <button
//                 className="bg-black text-white text-white text-lg p-1 rounded-md px-2 py-1"
//                 onClick={() => {
//                   setModal(true);
//                   setEmail(item);
//                 }}
//               >
//                 view
//               </button>
//             </div>
//           </div>
//         );
//       })}
//     {mails && mails.length === 0 && (
//       <div className="text-gray-500 text-center">Loading mails...</div>
//     )}
//     {/* Email modal on View Click Modal Start */}
//     <div
//       className={`${
//         modal ? "flex" : "hidden"
//       } absolute h-fit flex-col p-4 mx-auto top-10 bottom-0  left-0 right-0 mx-auto w-2/3 z-40 border border-gray-400 rounded-lg bg-white shadow-md shadow-gray-300`}
//       ref={modalRef}
//     >
//       <div className="relative flex pb-1 flex-wrap -top-8 -right-8">
//         <button
//           className="absolute top-0 right-0 text-xl text-white font-bold bg-black text-white p-1 rounded-lg px-4"
//           onClick={() => {
//             setModal(false);
//             setEmail({});
//           }}
//         >
//           x
//         </button>
//       </div>
//       <div className="flex justify-between mb-6 pb-1 border-b border-gray-300">
//         <h1 className="text-2xl">Tenant #{email.tenant_id}</h1>
//         <h1 className="text-xl">
//           Date -{" "}
//           {email?.timestamp &&
//             new Intl.DateTimeFormat("en-US").format(
//               Date.parse(email.timestamp)
//             )}
//         </h1>
//       </div>
//       <div className="flex mb-6 pb-1 border-b border-gray-300 flex-wrap">
//         <h1 className="text-2xl me-5">Subject:</h1>
//         <p className="text-xl items-end flex">{email.subject}</p>
//       </div>
//       <div className="flex mb-6 pb-1 flex-wrap">
//         <p className="text-lg">{email.body}</p>
//       </div>
//     </div>

//     {/* Modal End */}
//   </div>
// </>
