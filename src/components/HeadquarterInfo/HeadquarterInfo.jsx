import React from "react";

const HeadquarterInfo = ({ error, loading, spaceData }) => {
  return (
    <>
      {!loading && !error && spaceData && (
        <div className="min-h-[599px] bg-white shadow-lg shadow-[#F0F0F0] rounded-3xl pt-[69px] px-12">
          <h2 className="text-2xl font-semibold mb-10">Headquarter</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[78px]">
            <div className="flex items-center rounded-lg">
              <div className="rounded-full">
                <img
                  src="/assets/company-name.svg"
                  alt="image not found"
                  className="size-[87px]"
                />
              </div>
              <div className="ml-4">
                <p className="text-[14px] leading-5 font-normal text-[#ACACAC] -mt-2">
                  City
                </p>
                <p className="font-semibold text-[#333333] text-3xl">
                  {spaceData.headquarters.city}
                </p>
              </div>
            </div>

            <div className="flex items-center rounded-lg">
              <div className="rounded-full">
                <img
                  src="/assets/company-name.svg"
                  alt="image not found"
                  className="size-[87px]"
                />
              </div>
              <div className="ml-4">
                <p className="text-[14px] leading-5 font-normal text-[#ACACAC] -mt-2">
                  State
                </p>
                <p className="font-semibold text-[#333333] text-3xl">
                  {spaceData.headquarters.state}
                </p>
              </div>
            </div>

            <div className="flex items-center rounded-lg">
              <div className="rounded-full">
                <img
                  src="/assets/company-name.svg"
                  alt="image not found"
                  className="size-[87px]"
                />
              </div>
              <div className="ml-4">
                <p className="text-[14px] leading-5 font-normal text-[#ACACAC] -mt-2">
                  Address
                </p>
                <p className="font-semibold text-[#333333] text-3xl">
                  {spaceData.headquarters.address}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default HeadquarterInfo;
