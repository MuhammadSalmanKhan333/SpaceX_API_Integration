import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="w-screen h-screen bg-[#4880FF] flex justify-center items-center">
      <div className="bg-[#FFFFFF] w-[630px] h-[600px] flex justify-center items-center rounded-2xl">
        <div className=" flex flex-col gap-14 relative">
          <img src="/assets/404page.svg" alt="404page" />
          <h1 className="text-3xl md:text-9xl tracking-widest font-bold absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[#FD9E28]">
            404
          </h1>
          <div className="flex flex-col gap-6">
            <h1 className="text-2xl text-center text-[#202224]">
              Looks like you’ve got lost….
            </h1>
            <Link
              to="/"
              className="w-full focus:outline-1 bg-[#4880FF] py-4 text-white font-bold text-lg rounded-xl text-center hover:text-[aqua] hover:bg-[#364d81] duration-1000 shadow-xl"
            >
              Back to Dashboard
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
