import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/footer";
import Notification from "../components/notification";
import SideBar from "../components/sideBar";
import TopBar from "../components/topBar";

const Layout = () => {
  return (
    <div className="w-screen h-screen flex flex-col bg-green-300">
      <Notification />
      <TopBar />
      <SideBar />
      {/* Pages content : Begin */}
      <Outlet />
      {/* Pages content : End */}
      <Footer />
    </div>
  );
};

export default Layout;
