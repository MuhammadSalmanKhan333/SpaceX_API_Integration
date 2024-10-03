import React, { useState, useEffect } from "react";
import axios from "axios";
import CompanyInfo from "../companyInfo/CompanyInfo";
import HeadquarterInfo from "../HeadquarterInfo/HeadquarterInfo";

const MainContent = () => {
  const [spaceData, setSpaceData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const response = await axios.get("https://api.spacexdata.com/v3/info");
        console.log(response.data);
        setSpaceData(response.data);
        // setLoading(false);
      } catch (error) {
        console.log(error);
        setError(error);
        // setLoading(false);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);
  return (
    <div className="flex-1 overflow-y-scroll xl:px-[71px] pt-[102px] font-semibold text-2xl">
      <h1 className="font-semibold text-3xl text-[#333333]">Company Info</h1>
      {loading && <h1 className="text-2xl text-teal-600">Loading.....</h1>}
      {error && <h1 className="text-2xl text-red-600">Data Fetching Error</h1>}
      <CompanyInfo error={error} loading={loading} spaceData={spaceData} />
      <HeadquarterInfo error={error} loading={loading} spaceData={spaceData} />
    </div>
  );
};

export default MainContent;
