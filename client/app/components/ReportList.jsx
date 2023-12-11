import React, { useEffect, useRef, useState } from "react";
import { IoCreateOutline } from "react-icons/io5";

const ReportList = ({ reportList }) => {
  const [reports, setReports] = useState([]);
  const [query, setQuery] = useState("");
  const [tenant, setTenant] = useState({});
  const [resultsFound, setResultsFound] = useState(true);
  const initialTenantDetails = {
    tenant_ref: "",
    tenant_name: "",
    property_desc: "",
    owner_name: "",
    transaction_nett: "",
    transaction_due_date: "",
  };
  const [newTenant, setNewTenant] = useState(initialTenantDetails);
  const editModalRef = useRef(null);
  const addModalRef = useRef(null);
  const [showEdit, setShowEdit] = useState(false);
  const [showAdd, setShowAdd] = useState(false);
  useEffect(() => {
    setReports(reportList);
    function onClickOutside(event) {
      if (
        editModalRef.current &&
        !editModalRef.current.contains(event.target)
      ) {
        setShowEdit(false);
      }
      if (addModalRef.current && !addModalRef.current.contains(event.target)) {
        setShowAdd(false);
      }
    }
    document.addEventListener("mousedown", onClickOutside);
    return () => {
      document.removeEventListener("mousedown", onClickOutside);
    };
  }, [editModalRef, reportList]);

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
          item["owner_name"].toLowerCase().includes(query.toLowerCase())
        );
      });
      setReports(filteredArray);
      setQuery("");
    }
  };
  const handleDynamicSearch = (e) => {
    setQuery(e.target.value);
    if (e.target.value === "") {
      setReports(reportList);
      setQuery("");
      return;
    }
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
      if (filteredArray.length === 0) setResultsFound(false);
      else setResultsFound(true);
      setReports(filteredArray);
    }
  };
  const handleEditTenant = async (e) => {
    e.preventDefault();
    // const result = await makeAPICALL sending  tenant
    console.log(tenant);
    const tempReports = reports.map((item) => {
      if (item.tenant_ref === tenant.tenant_ref) {
        console.log({ ...item, tenant });
        return tenant;
      }
      return item;
    });
    setReports([...tempReports]);
    setTenant({ initialTenantDetails });
    setShowEdit(false);
  };
  const handleAddTenant = async (e) => {
    e.preventDefault();
    // const result = await makeAPICALL Seding new tenant
    // console.log(newTenant);
    const temp = { ...newTenant, tenant_ref: reports.length + 1 };
    console.log(temp);
    setReports([temp, ...reportList]);
    setNewTenant(initialTenantDetails);
    setShowAdd(false);
  };
  return (
    <div className="relaitve w-full z-10 h-screen overflow-y-auto">
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
        <div className="flex">
          <button
            className="rounded-lg bg-black text-white py-2 uppercase px-4"
            onClick={() => setShowAdd(true)}
          >
            Add Tenant
          </button>
        </div>
      </div>
      {reportList.length === 0 && (
        <div className="text-gray-700 text-2xl text-center">
          There are no Tenants. Add Now.
        </div>
      )}
      {reports.length === 0 && !resultsFound ? (
        <p className="text-xl text-gray-700 text-center mt-10">
          No results found...
        </p>
      ) : reports.length !== 0 ? (
        <table className="w-full border border-black">
          <thead className="bg-white z-40 sticky top-0 uppercase border border-black overflow-x-auto">
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
                    <button
                      className="rounded-md"
                      onClick={() => {
                        setShowEdit(true);
                        setTenant(item);
                      }}
                    >
                      <IoCreateOutline />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <div className="text-gray-700 text-xl text-center">
          Loading Tenants....
        </div>
      )}
      {/* EDIT CELL MODAL */}
      <div
        ref={editModalRef}
        className={`${
          showEdit ? "block" : "hidden"
        } absolute h-fit flex-col p-4 mx-auto top-56 bottom-0  left-0 right-0 w-2/3 z-40 border border-gray-400 rounded-lg bg-white shadow-md shadow-gray-300`}
      >
        <div className="flex justify-between mb-4">
          <p className="text-center text-xl font-bold">EDIT DETAILS</p>
          <p className="text-xl">Tenant ID: #{tenant.tenant_ref}</p>
        </div>
        <form className="flex flex-col">
          <input
            value={tenant.tenant_name}
            placeholder="Tenant Name"
            className="rounded-md border border-gray-400 outline-none px-4 py-2 mb-4"
            onChange={(e) => {
              setTenant({ ...tenant, tenant_name: e.target.value });
            }}
          />
          <input
            value={tenant.owner_name}
            placeholder="Owner Name"
            className="rounded-md border border-gray-400 outline-none px-4 py-2 mb-4"
            onChange={(e) => {
              setTenant({ ...tenant, owner_name: e.target.value });
            }}
          />
          <input
            value={tenant.property_desc}
            placeholder="Property Address"
            className="rounded-md border border-gray-400 outline-none px-4 py-2 mb-4"
            onChange={(e) => {
              setTenant({ ...tenant, property_desc: e.target.value });
            }}
          />
          <input
            value={tenant.transaction_nett}
            placeholder="Rent Amount"
            className="rounded-md border border-gray-400 outline-none px-4 py-2 mb-4"
            onChange={(e) => {
              setTenant({
                ...tenant,
                transaction_nett: e.target.value,
              });
            }}
          />
          <input
            value={tenant.transaction_due_date}
            placeholder="Due Date"
            className="rounded-md border border-gray-400 outline-none px-4 py-2 mb-4"
            onChange={(e) => {
              setTenant({
                ...tenant,
                transaction_due_date: e.target.value,
              });
            }}
          />
          <div className="flex justify-end">
            <div className="flex w-1/4 justify-between">
              <button
                className="rounded-md bg-red-400 text-white px-4 py-2"
                onClick={(e) => {
                  e.preventDefault();
                  setShowEdit(false);
                  setTenant({});
                }}
              >
                Discard
              </button>
              <button
                type="submit"
                className="rounded-md bg-black text-white px-4 py-2"
                onClick={handleEditTenant}
              >
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
      {/* ADD TENANT MODAL */}
      <div
        ref={addModalRef}
        className={`${
          showAdd ? "block" : "hidden"
        } absolute h-fit flex-col p-4 mx-auto top-56 bottom-0  left-0 right-0  w-2/3 z-40 border border-gray-400 rounded-lg bg-white shadow-md shadow-gray-300`}
      >
        <p className="text-center text-xl font-bold mb-4">ADD TENANT</p>
        <form className="flex flex-col">
          <input
            value={newTenant.tenant_name}
            placeholder="Tenant Name"
            className="rounded-md border border-gray-400 outline-none px-4 py-2 mb-4"
            onChange={(e) =>
              setNewTenant({ ...newTenant, tenant_name: e.target.value })
            }
          />
          <input
            value={newTenant.owner_name}
            placeholder="Owner Name"
            className="rounded-md border border-gray-400 outline-none px-4 py-2 mb-4"
            onChange={(e) =>
              setNewTenant({ ...newTenant, owner_name: e.target.value })
            }
          />
          <input
            value={newTenant.property_desc}
            placeholder="Property Address"
            className="rounded-md border border-gray-400 outline-none px-4 py-2 mb-4"
            onChange={(e) =>
              setNewTenant({ ...newTenant, property_desc: e.target.value })
            }
          />
          <input
            value={newTenant.transaction_nett}
            placeholder="Rent Amount"
            className="rounded-md border border-gray-400 outline-none px-4 py-2 mb-4"
            onChange={(e) =>
              setNewTenant({ ...newTenant, transaction_nett: e.target.value })
            }
          />
          <input
            value={newTenant.transaction_due_date}
            placeholder="Due Date"
            className="rounded-md border border-gray-400 outline-none px-4 py-2 mb-4"
            onChange={(e) =>
              setNewTenant({
                ...newTenant,
                transaction_due_date: e.target.value,
              })
            }
          />
          <div className="flex justify-end">
            <div className="flex w-2/3 justify-end h-fit items-end">
              <button
                className="rounded-md bg-red-400 text-white px-4 py-2 me-6"
                onClick={(e) => {
                  e.preventDefault();
                  setShowAdd(false);
                  setNewTenant(initialTenantDetails);
                }}
              >
                Discard
              </button>
              <button
                type="submit"
                className="rounded-md bg-black text-white px-4 py-2"
                onClick={handleAddTenant}
              >
                Save Tenant
              </button>
            </div>
          </div>
        </form>
      </div>
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
