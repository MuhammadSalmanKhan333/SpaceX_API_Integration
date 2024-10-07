import React from "react";
import { LuArrowDown, LuArrowUp } from "react-icons/lu";

const CompanyInfo = ({ loading, error, spaceData }) => {
  return (
    <>
      {!loading && !error && spaceData && (
        <div className="bg-white rounded-xl w-full min-h-[151px] shadow-lg shadow-[#F0F0F0] mt-16 px-12 py-7 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 w-full">
            <div className="flex items-center gap-5 min-w-[216px]">
              <img
                className="size-[86px] rounded-full"
                src="/assets/company-name.svg"
                alt=""
              />
              <div className="">
                <p className="font-normal text-[#ACACAC] text-sm">Name</p>
                <p className="font-semibold text-sm lg:text-xl xl:text-3xl text-[#333333] ">
                  {spaceData.name}
                </p>
                <div className="text-xs font-normal mt-2">
                  <span className="text-green-600 font-bold inline-flex gap-1">
                    <LuArrowUp /> 10%
                  </span>{" "}
                  this month
                </div>
              </div>
            </div>
            <div className="flex items-center gap-5 min-w-[216px]">
              <img
                className="size-[86px] rounded-full"
                src="/assets/name.svg"
                alt=""
              />
              <div className="">
                <p className="font-normal text-[#ACACAC] text-sm">Founder</p>
                <p className="font-semibold text-sm lg:text-xl xl:text-3xl text-[#333333] ">
                  {spaceData.founder}
                </p>
                <div className="text-xs font-normal mt-1">
                  <span className="text-red-600 font-bold inline-flex gap-1">
                    <LuArrowDown />
                    1%
                  </span>{" "}
                  this month
                </div>
              </div>
            </div>
            <div className="flex items-center gap-5 min-w-[216px]">
              <img
                className="size-[84px] rounded-full"
                src="/assets/valuation.svg"
                alt=""
              />
              <div className="">
                <p className="font-normal text-[#ACACAC] text-sm">Valuation</p>
                <p className="font-semibold text-sm lg:text-xl xl:text-3xl text-[#333333]">
                  {spaceData.valuation}
                </p>
                <div className="flex relative">
                  <img
                    className="size-6 peer/one hover:z-10 duration-[1s] hover:-translate-y-1 cursor-pointer"
                    src="/assets/image1.svg"
                    alt="image not found"
                  />
                  <span className="div absolute top-8 opacity-0 text-xs text-[#ACACAC] peer-hover/one:opacity-100">
                    Person1
                  </span>
                  <img
                    className="size-6 peer/second -ml-2 hover:z-10 duration-[1s] hover:-translate-y-1 cursor-pointer"
                    src="/assets/image2.svg"
                    alt="image not found"
                  />
                  <span className="div absolute top-8 left-2 opacity-0 text-xs text-[#ACACAC] peer-hover/second:opacity-100">
                    Person2
                  </span>
                  <img
                    className="size-6 peer/third -ml-2 hover:z-10 duration-[1s] hover:-translate-y-1 cursor-pointer"
                    src="/assets/image3.svg"
                    alt="image not found"
                  />
                  <span className="div absolute top-8 left-5 opacity-0 text-xs text-[#ACACAC] peer-hover/third:opacity-100">
                    Person3
                  </span>
                  <img
                    className="size-6 peer/fourth -ml-2 hover:z-10 duration-[1s] hover:-translate-y-1 cursor-pointer"
                    src="/assets/image4.svg"
                    alt="image not found"
                  />
                  <span className="div absolute top-8 left-8 opacity-0 text-xs text-[#ACACAC] peer-hover/fourth:opacity-100">
                    Person4
                  </span>
                  <img
                    className="size-6 -ml-2 peer/fifth hover:z-10 duration-[1s] hover:-translate-y-1 cursor-pointer"
                    src="/assets/image5.svg"
                    alt="image not found"
                  />
                  <span className="div absolute top-8 right-2 opacity-0 text-xs text-[#ACACAC] peer-hover/fifth:opacity-100">
                    Person5
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CompanyInfo;
