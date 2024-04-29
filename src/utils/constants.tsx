import { MdDashboard } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";
import { RiCalendarScheduleFill } from "react-icons/ri";
import { IoIosPeople } from "react-icons/io";
import { FaCircleRadiation } from "react-icons/fa6";
import { MdOutlineSupportAgent } from "react-icons/md";
import { IoIosSettings } from "react-icons/io";
import {CiSettings} from "react-icons/ci"
export const sideBarConstant = [
  { id: 1, name: "Dashboard", icon: <MdDashboard />, to: "/dashboard" },
  { id: 1, name: "Recruitment", icon: <RiContactsFill />, to: "/recruitment" },
  {
    id: 1,
    name: "Schedule",
    icon: <RiCalendarScheduleFill />,
    to: "/schedule",
  },
  { id: 1, name: "Employees", icon: <IoIosPeople />, to: "/employees" },
  { id: 1, name: "Department", icon: <FaCircleRadiation />, to: "/department" },
  { id: 1, name: "Supports", icon: <MdOutlineSupportAgent />, to: "support" },
//   { id: 1, name: "Others", icon: <IoIosSettings />, to: "/others" },
];

export const sideBarConstant1 = [
  { id: 1, name: "Supports", icon: <MdOutlineSupportAgent />, to: "support" },
  { id: 1, name: "Settings", icon: <CiSettings />, to: "settings" },
];