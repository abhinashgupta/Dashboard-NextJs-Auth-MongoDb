"use client";

import SideBar from "../sideBar/SideBar";
import Header from "../header/Header";
import MainDashboard from "../mainDashboard/MainDashboard";
import { useState } from "react";

const DashboardUi = () => {
  const [openHam, setOpenHam] = useState(false);
  const handleHam = () => {
    setOpenHam(!openHam);
  };
  return (
    <div className="flex">
      <div className="">
        {openHam && (
          <div className="sidebar" style={{ flex: "1" }}>
            <SideBar />
          </div>
        )}
      </div>
      <div className="main-content">
        <Header handleHam={handleHam} openHam={openHam} />
        <MainDashboard />
      </div>
    </div>
  );
};

export default DashboardUi;
