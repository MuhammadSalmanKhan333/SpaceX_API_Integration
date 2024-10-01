import React from "react";
import SideBar from "./sidebar/SideBar";
import { Outlet } from "react-router-dom";

const layout = (props) => {
  // console.log(props.Children);
  return (
    <>
      <SideBar />
      <Outlet />
      {/* {props.children} */}
    </>
  );
};

export default layout;
