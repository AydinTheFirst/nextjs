import { FaChartPie, FaUser } from "react-icons/fa";
import { FaGears } from "react-icons/fa6";

export const pages = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: FaChartPie,
    iconClass: "bg-success/10 text-success",
  },
  {
    label: "Settings",
    href: "/dashboard/settings",
    icon: FaGears,
    iconClass: "bg-warning/10 text-warning",
  },
  {
    label: "Profile",
    href: "/dashboard/profile",
    icon: FaUser,
    iconClass: "bg-primary/10 text-primary",
  },
];
