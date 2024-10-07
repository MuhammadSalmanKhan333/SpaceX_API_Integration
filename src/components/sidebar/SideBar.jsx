import React, { useState } from "react";
import { LuChevronDown, LuChevronLeft } from "react-icons/lu";
import { Link, useParams } from "react-router-dom";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleSideBar = () => {
    setIsOpen(!isOpen);
  };

  const { id } = useParams();
  const pathname = window.location.pathname;
  const missionRegex = /^\/mission\/\d+/;
  const historyRegex = /^\/history\/\d+/;

  return (
    <div
      className={`h-screen bg-white pt-9 flex flex-col z-10 relative duration-300 shadow-xl shadow-[#E2ECF9] ${
        isOpen ? "w-72 px-7" : "w-20 px-2 items-center"
      }`}
    >
      <div className="absolute top-10 -right-4 border-2 border-gray-300 cursor-pointer bg-white rounded-full hover:bg-[#6060c0] hover:text-white">
        <LuChevronLeft
          className={`size-7 ${isOpen ? "rotate-180" : ""}`}
          onClick={handleSideBar}
        />
      </div>
      {/* Top logo and profile section */}
      <div className="flex items-center gap-2">
        <img
          className={`${
            !isOpen || (isOpen && "rotate-[360deg] duration-[1s]")
          }`}
          src="/assets/company_logo.svg"
          alt=""
        />
        {isOpen && (
          <h1 className="text-2xl font-semibold font-poppins ">SpaceX</h1>
        )}
      </div>

      {/* Sidebar Menu */}
      {/* <Router> */}
      <nav className="flex-1 mt-16">
        <ul className="space-y-5">
          <li>
            <Link
              to="/"
              className={`flex items-center text-[#9197B3] py-3 px-2 hover:bg-[#6060c0] hover:text-white rounded-lg transition duration-300 ${
                pathname === "/" ? "bg-[#6060c0] text-white" : ""
              }`}
            >
              <img
                src="/assets/company-info.svg"
                alt="Company Info"
                className="w-6 h-6"
              />
              {isOpen && (
                <span className="ml-4 text-sm font-poppins font-medium">
                  Company Info
                </span>
              )}
            </Link>
          </li>
          <li>
            <Link
              to="/history"
              className={`flex items-center text-[#9197B3] py-3 px-2 hover:bg-[#6060c0] hover:text-white rounded-lg transition duration-300 ${
                pathname === "/history" || historyRegex.test(pathname)
                  ? "bg-[#6060c0] text-white"
                  : ""
              }`}
            >
              <img
                src="/assets/history.svg"
                alt="History"
                className="w-6 h-6"
              />
              {isOpen && (
                <span className="ml-4 text-sm font-poppins font-medium">
                  History
                </span>
              )}
            </Link>
          </li>
          <li>
            <Link
              to="/mission"
              className={`flex items-center text-[#9197B3] py-3 px-2 hover:bg-[#6060c0] hover:text-white rounded-lg ${
                pathname === "/mission" || missionRegex.test(pathname)
                  ? "bg-[#6060c0] text-white"
                  : ""
              }`}
            >
              <img
                src="/assets/mission.svg"
                alt="Missions"
                className="w-6 h-6 bg-[#9197B3]"
              />
              {isOpen && (
                <span className="ml-4 text-sm font-poppins font-medium">
                  Missions
                </span>
              )}
            </Link>
          </li>
        </ul>
      </nav>
      {/* </Router> */}
      {/* Upgrade Section */}
      {isOpen && (
        <div className="bg-purple-600 rounded-2xl p-6   text-white w-full text-center mb-10">
          <p className="text-sm mb-2 font-semibold pb-2">
            Upgrade to PRO to get access all Features!
          </p>
          <button className="bg-white text-[#4925E9] px-[40px] py-2 rounded-2xl font-semibold text-sm font-poppins hover:bg-gray-100 transition duration-300">
            Get Pro Now!
          </button>
        </div>
      )}

      {/* Profile section */}
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <img
            src="/assets/evano.png"
            alt="User"
            className={`rounded-full w-[42px] h-[42px] ${!isOpen ? "" : ""}`}
          />
          {isOpen && (
            <div className="ml-4">
              <p className="font-medium text-sm font-poppins">Evano</p>
              <p className="text-[#757575] text-xs font-normal font-poppins">
                Project Manager
              </p>
            </div>
          )}
        </div>
        {isOpen && <LuChevronDown className="size-6 text-[#757575]" />}
      </div>
    </div>
  );
};

export default Sidebar;
