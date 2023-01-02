import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../components/sideBar";
import TopBar from "../components/topBar";

const Layout = () => {
  return (
    <div className="w-screen h-screen flex flex-col bg-green-300">
      <Notification />
      <TopBar />
      <SideBar />
      {/* Outlet 안에 페이지들이 들어갑니다. */}
      <Outlet />
    </div>
  );
};

export default Layout;
