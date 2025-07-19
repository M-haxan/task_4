import React from "react";
import { FaRegClock } from "react-icons/fa";
import SidebarMenuItem from "./SidebarMenuItem";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';

const menuItems = [
  {
    title: "Home",
    icon: <FaRegClock className="text-gray-500" />,
    subMenu: [
      { title: "E commerce", active: true },
      { title: "Project management" },
      { title: "CRM" },
      { title: "Travel agency" },
      { title: "Stock", badge: "NEW" },
      { title: "Social feed" },
    ],
  },
  {
    title: "Ecomerce",
    icon: <ShoppingCartIcon className="text-gray-500" />,
    subMenu: [
      
      { title: "Add Product" },
      { title: "Products" },
      { title: "Customer" },
      { title: "Customer Details" },
      { title: "Orders" },
      { title: "Order Details" },
      { title: "Refund" },
    ],
  },
  {
    title: "CRM",
    icon: <PhoneOutlinedIcon className="text-gray-500" />,
    subMenu: [
      
      { title: "Add Product" },
      { title: "Products" },
      { title: "Customer" },
      { title: "Customer Details" },
      { title: "Orders" },
      { title: "Order Details" },
      { title: "Refund" },
    ],
  },
  {
    title: "Project Management",
    icon: <AssignmentOutlinedIcon className="text-gray-500" />,
    subMenu: [
      
      { title: "Add Product" },
      { title: "Products" },
      { title: "Customer" },
      { title: "Customer Details" },
      { title: "Orders" },
      { title: "Order Details" },
      { title: "Refund" },
    ],
  },
  // Aap yahan aur menus add kar sakte ho
];

export default function Sidebar() {
  return (
    <div className="fixed top-15 h-full w-60 border border-[#E0E1E6] bg-white min-md:hidden max-sm:hidden">
      <ul className="p-2 space-y-2">
        {menuItems.map((item, index) => (
          <SidebarMenuItem key={index} item={item} />
        ))}
      </ul>
    </div>
  );
}