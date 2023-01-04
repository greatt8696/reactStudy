import React from "react";
import { Outlet } from "react-router-dom";
const SubLayout = () => {
  return (
    <div>
      {/* Pages content : Begin */}
      <Outlet />
      {/* Pages content : End */}
    </div>
  );
};

export default SubLayout;
