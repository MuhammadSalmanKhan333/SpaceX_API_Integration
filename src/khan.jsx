import React, { useEffect, useState } from "react";
import HistoryTable from "../../TableComponent/HistoryTable";
import axios from "axios";
import Pagination from "../../paginationComponent/Pagination";

const History = () => {
  const [tableData, setTableData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("new"); // New or Old

  useEffect(() => {
    const getHistoryData = async () => {
      try {
        const response = await axios.get(
          "https://api.spacexdata.com/v3/history"
        );
        setTableData(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    getHistoryData();
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
    setCurrentPage(1); // Reset to first page when searching
  };

  const handleSortChange = (e) => {
    setSortOrder(e.target.value); // Set sort order when dropdown changes
    setCurrentPage(1); // Reset to first page when sorting
  };

  // Filter based on the search input
  const filteredData = tableData
    .filter((data) => data.title.toLowerCase().includes(search.toLowerCase()))
    // Sort by event date based on sortOrder (new or old)
    .sort((a, b) => {
      const dateA = new Date(a.event_date_utc);
      const dateB = new Date(b.event_date_utc);

      if (sortOrder === "new") {
        return dateB - dateA; // Newest first
      } else {
        return dateA - dateB; // Oldest first
      }
    });

  const limit = 5;
  const totalPages = Math.ceil(filteredData.length / limit);

  const handlePagination = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const previousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="flex-1 overflow-y-scroll xl:px-[71px] pt-[110px] font-semibold text-2xl">
      <div className="bg-white w-full min-h-[800px] border-2 shadow-xl border-green-600 rounded-3xl pt-9">
        <div className="flex w-full gap-6 flex-col md:flex-row md:justify-between items-center px-10">
          <h1 className="font-semibold text-2xl text-[#000000]">History</h1>
          <div className="flex gap-5 items-center flex-wrap">
            <div className="relative">
              <img
                className="absolute top-2 left-2"
                src="/assets/search.svg"
                alt="Search icon"
              />
              <input
                className="input-style"
                type="text"
                onChange={handleChange}
                value={search}
                placeholder="Search"
              />
            </div>
            <div className="border min-w-[156px] h-[38px] flex py-2 px-6 bg-[#F9FBFF] rounded-xl">
              <label
                className="text-sm text-[#B5B7C0] font-normal"
                htmlFor="sortBy"
              >
                Sort by:
              </label>
              <select
                className="text-sm font-semibold pr-3 bg-[#F9FBFF] focus:outline-none"
                id="sortBy"
                onChange={handleSortChange} // Listen to dropdown change
                value={sortOrder}
              >
                <option value="new">New</option>
                <option value="old">Old</option>
              </select>
            </div>
          </div>
        </div>
        <HistoryTable
          tableData={filteredData}
          loading={loading}
          error={error}
          currentPage={currentPage}
          limit={limit}
        />
        <Pagination
          paginationNumber={[...Array(totalPages).keys()].map((n) => n + 1)}
          currentPage={currentPage}
          nextPage={nextPage}
          previousPage={previousPage}
          handlePagination={handlePagination}
          totalPages={totalPages}
        />
      </div>
    </div>
  );
};

export default History;
