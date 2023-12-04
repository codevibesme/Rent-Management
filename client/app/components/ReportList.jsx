import React, { useEffect, useState } from "react";
import { IoCreateOutline } from "react-icons/io5";

const ReportList = ({ reportList }) => {
  const [reports, setReports] = useState([]);
  const [query, setQuery] = useState("");
  useEffect(() => {
    setReports(reportList);
  }, [reportList]);

  // Sorter for fields
  const sortFields = (field, dir) => {
    let arr = reportList;
    console.log(arr);
    arr.sort(function (a, b) {
      let x, y;
      if (field === "tenant_ref") {
        x = Math.floor(a[field].split("/").join(""));
        y = Math.floor(b[field].split("/").join(""));
      } else if (field === "transaction_due_date") {
        x = new Date(a[field]);
        y = new Date(b[field]);
      } else if (field === "transaction_nett") {
        x = Math.floor(a[field].split(",").join(""));
        y = Math.floor(b[field].split(",").join(""));
      }
      if (dir == "down") return y - x;
      else return x - y;
    });
    setReports([...arr]);
  };

  // Search fields
  const handleSearch = (e) => {
    e.preventDefault();
    if (reportList.length !== 0) {
      const filteredArray = reportList.filter((item) => {
        return (
          item["tenant_name"].toLowerCase().includes(query.toLowerCase()) ||
          item["property_desc"].toLowerCase().includes(query.toLowerCase()) ||
          item["owner_name"]
            .toLowerCase()
            .includes(e.target.value.toLowerCase())
        );
      });
      setReports(filteredArray);
    }
  };
  const handleDynamicSearch = (e) => {
    setQuery(e.target.value);
    if (reportList.length !== 0) {
      const filteredArray = reportList.filter((item) => {
        return (
          item["tenant_name"]
            .toLowerCase()
            .includes(e.target.value.toLowerCase()) ||
          item["property_desc"]
            .toLowerCase()
            .includes(e.target.value.toLowerCase()) ||
          item["owner_name"]
            .toLowerCase()
            .includes(e.target.value.toLowerCase())
        );
      });
      setReports(filteredArray);
    }
  };
  return (
    <div className="w-full">
      <div className="w-full flex justify-between mb-6">
        <form className="w-4/5 flex justify-between" onSubmit={handleSearch}>
          <input
            className="text-xl rounded-md px-4 py-2 outline-none border border-gray-400 w-4/5"
            placeholder="Search tenant name, owner name or address"
            value={query}
            onChange={handleDynamicSearch}
          />
          <button
            type="submit"
            className="rounded-lg bg-black  px-4 py-2 uppercase text-white"
          >
            search
          </button>
        </form>
        <div className="flex items-start  items-end">
          <button className="rounded-lg bg-black text-white py-2 uppercase px-4">
            Add Tenant
          </button>
        </div>
      </div>

      {reports.length === 0 ? (
        <p className="text-xl text-gray-700 text-center mt-10">
          No results found...
        </p>
      ) : (
        <table className="w-full border border-black">
          <thead className="uppercase border border-black overflow-x-auto">
            <tr className="border border-black">
              <th scope="col" className="px-4 py-2 border border-black">
                <div className="flex justify-between w-full">
                  <p>tenant id</p>
                  <div className="flex flex-col justify-center">
                    <button
                      className="text-[0.6rem]"
                      onClick={() => sortFields("tenant_ref", "up")}
                    >
                      &#9650;
                    </button>
                    <button
                      className="text-[0.6rem]"
                      onClick={() => sortFields("tenant_ref", "down")}
                    >
                      &#9660;
                    </button>
                  </div>
                </div>
              </th>
              <th scope="col" className="px-4 py-2 border border-black">
                tenant name
              </th>

              <th scope="col" className="px-4 py-2 border border-black">
                owner name
              </th>
              <th scope="col" className="px-4 py-2 border border-black">
                property address
              </th>
              <th scope="col" className="px-4 py-2 border border-black">
                <div className="flex justify-between w-full">
                  <p>rent (in Rs)</p>
                  <div className="flex flex-col justify-center">
                    <button
                      className="text-[0.6rem]"
                      onClick={() => sortFields("transaction_nett", "up")}
                    >
                      &#9650;
                    </button>
                    <button
                      className="text-[0.6rem]"
                      onClick={() => sortFields("transaction_nett", "down")}
                    >
                      &#9660;
                    </button>
                  </div>
                </div>
              </th>
              <th
                scope="col"
                className="px-4 py-2 border border-black border-r-0"
              >
                <div className="flex justify-between w-full">
                  <p className="me-2">due date</p>
                  <div className="flex flex-col justify-center">
                    <button
                      className="text-[0.6rem]"
                      onClick={() => sortFields("transaction_due_date", "up")}
                    >
                      &#9650;
                    </button>
                    <button
                      className="text-[0.6rem]"
                      onClick={() => sortFields("transaction_due_date", "down")}
                    >
                      &#9660;
                    </button>
                  </div>
                </div>
              </th>
              <th className="px-4 py-2"></th>
            </tr>
          </thead>
          <tbody className="w-full overflow-y-scroll overflow-x-auto">
            {reports.map((item, idx) => {
              return (
                <tr className="border border-black" key={idx}>
                  <td className="px-4 py-2 border border-black">
                    {item.tenant_ref ? item.tenant_ref : "NA"}
                  </td>
                  <td className="px-4 py-2 border border-black">
                    {item.tenant_name ? item.tenant_name : "NA"}
                  </td>

                  <td className="px-4 py-2 border border-black">
                    {item.owner_name ? item.owner_name : "NA"}
                  </td>
                  <td className="px-4 py-2 border border-black">
                    {item.property_desc ? item.property_desc : "NA"}
                  </td>
                  <td className="px-4 py-2 border border-black">
                    {item.transaction_nett ? item.transaction_nett : "NA"}
                  </td>
                  <td className="px-4 py-2 ">
                    {item.transaction_due_date
                      ? item.transaction_due_date
                      : "NA"}
                  </td>
                  <td className="text-3xl px-4 py-2">
                    <button className="rounded-md">
                      <IoCreateOutline />
                    </button>
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
{
  /* <div className="flex w-full border-b border-gray-100 mb-4">
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
<div className="flex flex-col max-w-screen max-h-screen overflow-y-auto">
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
</div> */
}

export default ReportList;
