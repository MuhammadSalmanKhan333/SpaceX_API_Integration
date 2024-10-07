import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";

const ViewDetails = () => {
  const [viewData, setViewData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const getViewData = async () => {
      try {
        const response = await axios.get(
          `https://api.spacexdata.com/v3/history/${id}`
        );
        setViewData(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    getViewData();
  }, [id]);

  return (
    <div className="flex-1 overflow-y-scroll xl:px-[71px] pt-[110px] font-semibold text-2xl">
      <div className="bg-white w-full min-h-[800px] shadow-xl rounded-3xl p-10 relative">
        <div className="-ml-7 mb-4 w-fit">
          <Link
            to="/history"
            className="flex justify-center items-center gap-1 text-sm text-[#9197B3] cursor-pointer hover:text-[#7a8cdc] duration-300"
          >
            <IoMdArrowRoundBack className="size-6" />
            Back to History Page
          </Link>
        </div>
        <h2 className="text-xl font-semibold">History Details</h2>
        {loading && (
          <div className="text-teal-500 font-semibold">
            <p>Loading Data......</p>
          </div>
        )}
        {error && (
          <div className="text-red-600 font-semibold">
            <p>No Data Found......</p>
          </div>
        )}
        <div className="flex mt-[60px] gap-16 flex-col items-center md:flex-row">
          {/* First Section*/}
          <div className="flex-1 flex flex-col gap-8">
            <h1 className="text-[40px] leading-[3.5rem] font-extrabold text-[#100F0F] mb-4">
              {viewData.title || "Title not available"}
            </h1>
            <p className="text-[#8E8E8E] text-2xl leading-10 font-normal line-clamp-3 pr-10">
              {viewData.details || "No details available"}
            </p>

            <div className="flex space-x-2">
              {viewData && viewData?.links?.reddit && (
                <div className="bg-[#EBD96B] hover:bg-[#d9c754] shadow-md p-2 rounded-xl flex justify-center items-center">
                  <a
                    href={viewData && viewData.links.reddit}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="w-14 h-6 rounded inline"
                      src="/assets/reddit.svg"
                      alt="Reddit logo"
                    />
                  </a>
                </div>
              )}

              {viewData && viewData?.links?.wikipedia && (
                <div className="bg-[#EBD96B] hover:bg-[#d9c754] shadow-md p-2 rounded-xl flex justify-center items-center">
                  <a
                    href={viewData.links.wikipedia}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="w-14 h-6 rounded inline"
                      src="/assets/wikipedia.svg"
                      alt="Wikipedia logo"
                    />
                  </a>
                </div>
              )}

              {viewData && viewData?.links?.article && (
                <div className="bg-[#EBD96B] hover:bg-[#d9c754] shadow-md p-2 rounded-xl flex justify-center items-center">
                  {/* {viewData.links.article && ( */}
                  <a
                    href={viewData.links.article}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="w-14 h-6 rounded inline"
                      src="/assets/article.svg"
                      alt="Reddit logo"
                    />
                  </a>
                  {/* )} */}
                </div>
              )}
            </div>
          </div>

          {/* Second Section*/}
          <div className="flex-1 relative flex justify-end items-center">
            <img src="/assets/rings.svg" alt="rings img not found" />
          </div>
        </div>

        <div className="w-[92%] text-xl text-[#8E8E8E] font-normal sm:absolute bottom-7 flex max-sm:mt-5 max-sm:flex-col max-sm:gap-5 justify-between">
          {/* Date */}
          <p>
            {`Date: ${
              new Date(viewData.event_date_utc).toLocaleDateString() ||
              "Date not available"
            }`}
          </p>

          {/* Flight Number */}
          <p>Flight No: {viewData.flight_number || "N/A"}</p>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
