import React from "react";
import DashboardNav from "../components/DashboardNav";
import DashItems from "../components/DashItems";
const Dashboard = () => {
  return (
    <div className="min-h-screen w-full flex pt-2 px-8 pb-4">
      <DashboardNav />
      <DashItems menu={"Emails"} />
    </div>
  );
};

export default Dashboard;
{
  /* <div className="flex flex-col w-full">
        <div>
          <h1 className="text-3xl font-bold mb-10">Email Logs:</h1>

          <div className="flex flex-col w-full bg-white rounded-lg shadow-lg p-4">
            <div className="flex w-full  text-center mb-6  font-bold text-2xl ">
              <h1 className="w-1/4  me-6">Id</h1>
              <h1 className="w-1/4  me-6">Name</h1>
              <h1 className="w-1/4  me-6">Email Id</h1>
              <h1 className="w-1/4  ">Message</h1>
            </div>
            <div className="h-screen overflow-y-auto flex flex-col w-full">
              {email_list.map((item, key) => {
                return (
                  <div
                    key={key}
                    className="flex w-full  text-center mb-6 border-slate-400 border rounded-lg justify-center items-center"
                  >
                    <h1 className="w-1/4 text-xl me-6">{item.tenant_id}</h1>
                    <h1 className="w-1/4 text-xl me-6">{item.recipent}</h1>
                    <h1 className="w-1/4 text-xl me-6">{item.emailId}</h1>
                    <h1 className="w-1/4 text-xl">
                      {item.message.slice(0, 100)}...
                    </h1>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div> */
}
