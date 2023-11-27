import React from "react";

const Dashboard = () => {
  const email_list = [
    {
      _id: 1,
      recipent: "Soham Malakar",
      emailId: "soham@gmail.com",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      _id: 1,
      recipent: "Soham Malakar",
      emailId: "soham@gmail.com",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      _id: 1,
      recipent: "Soham Malakar",
      emailId: "soham@gmail.com",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      _id: 1,
      recipent: "Soham Malakar",
      emailId: "soham@gmail.com",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      _id: 1,
      recipent: "Soham Malakar",
      emailId: "soham@gmail.com",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      _id: 1,
      recipent: "Soham Malakar",
      emailId: "soham@gmail.com",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      _id: 1,
      recipent: "Soham Malakar",
      emailId: "soham@gmail.com",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
  ];
  return (
    <div className=" relative min-h-screen w-full pt-2 px-8 pb-4 bg-slate-200">
      <div className="flex flex-col w-full">
        <div>
          <h1 className="text-3xl font-bold mb-10">Email Logs:</h1>
          <div className="flex flex-col w-full bg-white rounded-lg shadow-lg p-4">
            <div className="flex w-full  text-center mb-6  font-bold text-2xl sticky z-40">
              <h1 className="w-1/4  me-6">Id</h1>
              <h1 className="w-1/4  me-6">Name</h1>
              <h1 className="w-1/4  me-6">Email Id</h1>
              <h1 className="w-1/4  me-6">Message</h1>
            </div>
            <div className="h-screen overflow-y-auto flex flex-col w-full">
              {email_list.map((item, key) => {
                return (
                  <div
                    key={key}
                    className="flex w-full  text-center mb-6 border-slate-400 border rounded-lg justify-center items-center"
                  >
                    <h1 className="w-1/4 text-xl me-6">{item._id}</h1>
                    <h1 className="w-1/4 text-xl me-6">{item.recipent}</h1>
                    <h1 className="w-1/4 text-xl me-6">{item.emailId}</h1>
                    <h1 className="w-1/4 text-xl me-6">
                      {item.message.slice(0, 100)}...
                    </h1>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
