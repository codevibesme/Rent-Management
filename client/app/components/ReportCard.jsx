import React from "react";

const ReportCard = ({ report }) => {
  return (
    <div className="flex flex-col w-full h-fit rounded-md border p-2 mb-4">
      <p className="mb-2">
        <span className="font-bold text-md">Tenant ID:</span>{" "}
        {report.tenant_ref ? report.tenant_ref : "NA"}
      </p>
      <p className="mb-2">
        <span className="font-bold text-md">Rent Amount:</span> Rs{" "}
        {report.transaction_nett ? report.transaction_nett : "NA"}
      </p>
      <p className="mb-2">
        <span className="font-bold text-md">Due Date:</span>{" "}
        {report.transaction_due_date ? report.transaction_due_date : "NA"}
      </p>
      <p className="mb-2">
        <span className="font-bold text-md">Tenant Name:</span>{" "}
        {report.tenant_name ? report.tenant_name : "NA"}
      </p>
      <p className="mb-2">
        <span className="font-bold text-md">Owner Name:</span>{" "}
        {report.owner_name ? report.owner_name : "NA"}
      </p>
      <p className="mb-2">
        <span className="font-bold text-md">Property Address:</span>{" "}
        {report.property_desc ? report.property_desc : "NA"}
      </p>
    </div>
  );
};

export default ReportCard;
