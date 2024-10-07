import React from "react";
import { useNavigate } from "react-router-dom";

const HistoryTable = ({ tableData, loading, limit, currentPage, error }) => {
  const navigate = useNavigate();
  return (
    <div className="overflow-x-auto mt-11 px-10">
      <table className="table">
        {/* head */}
        <thead className="text-[#B5B7C0] text-sm">
          <tr className="">
            <th>Title</th>
            <th>Event Date</th>
            <th>Details</th>
            <th>Links</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody className="font-medium text-sm">
          {/* row 1 */}
          {loading && (
            <tr className="border-none text-teal-500 font-semibold">
              <td>Loading Data......</td>
            </tr>
          )}
          {error && (
            <tr className="border-none text-red-600 font-semibold">
              <td>Error Ocurred While Fetching Data......</td>
            </tr>
          )}
          {tableData.length === 0 && !error ? (
            <tr className="border-none text-teal-500 font-semibold">
              <td>Data Not Found......</td>
            </tr>
          ) : (
            ""
          )}
          {tableData &&
            tableData
              ?.slice(currentPage * limit - limit, currentPage * limit)
              .map((data) => (
                <tr key={data.id}>
                  <td className="min-w-40 lg:min-w-72">
                    {data.title || "-------"}
                  </td>
                  <td>
                    {new Date(data.event_date_utc).toLocaleDateString() ||
                      "-------"}
                  </td>
                  <td className="truncate max-w-xs">
                    {data.details || "-------"}
                  </td>
                  <td className="min-w-36">
                    {data.links.reddit || data.links.wikipedia ? (
                      <>
                        {data.links.reddit && (
                          <a href={data.links.reddit || ""} target="_blank">
                            <img
                              className="w-14 h-6 rounded inline"
                              src="/assets/reddit.svg"
                              alt=""
                            />
                          </a>
                        )}
                        {data.links.wikipedia && (
                          <a
                            href={data.links.wikipedia || ""}
                            target="_blank"
                            className="ml-3"
                          >
                            <img
                              className="size-6 rounded inline"
                              src="/assets/wikipedia.svg"
                              alt=""
                            />
                          </a>
                        )}
                      </>
                    ) : (
                      "---------"
                    )}
                  </td>
                  <td>
                    <button
                      className="viewbtn"
                      onClick={() => navigate(`/history/${data.id}`)}
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}
        </tbody>
      </table>
    </div>
  );
};

export default HistoryTable;
