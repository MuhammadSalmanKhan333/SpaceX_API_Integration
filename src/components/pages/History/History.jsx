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
  const [sortBy, setSortBy] = useState("new");

  useEffect(() => {
    const getHistoryData = async () => {
      try {
        const response = await axios.get(
          "https://api.spacexdata.com/v3/history"
        );
        console.log(response.data);
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
    setCurrentPage(1);
  };
  const handleSortChange = (e) => {
    setSortBy(e.target.value);
    setCurrentPage(1);
  };
  console.log(sortBy);

  const filterData = tableData.filter((data) =>
    data.title.toLowerCase().includes(search.toLocaleLowerCase())
  );

  // const debounceFilteredData = debounce((search) => {
  //   const filtered = tableData.filter((data) =>
  //     data.title.toLowerCase().includes(search.toLowerCase())
  //   );
  //   setTableData(filtered);
  // }, 300);

  // useEffect(() => {
  //   debounceFilteredData(search);
  // }, [search]);

  const limit = 5;
  const paginationNumber = [];
  const totalPages = Math.ceil(filterData.length / limit);
  for (let i = 1; i <= totalPages; i++) {
    paginationNumber.push(i);
  }

  const handlePagination = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
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
                alt="image not found"
              />
              <input
                className="input-style"
                type="text"
                id="text"
                onChange={handleChange}
                placeholder="Search"
              />
            </div>
            <div className="border min-w-[156px] h-[38px] flex py-2 px-6 bg-[#F9FBFF] rounded-xl ">
              <label
                className="text-sm text-[#B5B7C0] font-normal"
                htmlFor="sortBy"
              >
                Sort by:
              </label>
              <select
                className="text-sm font-semibold selection:font-normal  pr-3 bg-[#F9FBFF] focus:outline-none"
                name="sortBy"
                id="sortBy"
                onChange={handleSortChange}
                value={sortBy}
              >
                <option value="new">New</option>
                <option value="old">Old</option>
              </select>
            </div>
          </div>
        </div>
        <HistoryTable
          tableData={filterData}
          loading={loading}
          error={error}
          currentPage={currentPage}
          limit={limit}
        />
        <Pagination
          paginationNumber={paginationNumber}
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
