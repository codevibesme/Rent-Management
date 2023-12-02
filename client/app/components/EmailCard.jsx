import React from "react";

const EmailCard = ({ email }) => {
  return (
    <div className="flex flex-col w-full h-fit rounded-md border p-2 mb-4">
      <div className="flex justify-between mb-2">
        <p className="text-lg">{email.tenant_id}</p>
        <p className="text-lg">
          {new Intl.DateTimeFormat("en-US").format(Date.parse(email.timestamp))}
        </p>
      </div>
      <p className="mb-2">{email.subject}</p>
      <p className="mb-2">{email.body}</p>
    </div>
  );
};

export default EmailCard;
