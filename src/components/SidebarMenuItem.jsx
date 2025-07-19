import React, { useState } from "react";
import { FaAngleDown, FaAngleRight } from "react-icons/fa";

const SidebarMenuItem = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <li className="text-gray-700 text-sm">
      <div
        className="flex items-center justify-between p-2 cursor-pointer hover:bg-[#C7CAD3] rounded"
        onClick={toggleMenu}
      >
        <div className="flex items-center gap-2">
          {item.icon}
          <span className="font-medium">{item.title}</span>
        </div>
        {item.subMenu && (isOpen ? <FaAngleDown /> : <FaAngleRight />)}
      </div>

      {/* Submenu */}
      {item.subMenu && isOpen && (
        <ul className="pl-6 mt-1 space-y-1">
          {item.subMenu.map((sub, index) => (
            <li
              key={index}
              className={`cursor-pointer p-1 rounded bg-blue ${
                sub.active
                  ? "text-blue-600 font-medium"
                  : "hover:bg-[#C7CAD3]"
              } flex items-center gap-2`}
            >
              {sub.title}
              {sub.badge && (
                <span className="text-xs bg-orange-100 text-orange-600 px-2 py-0.5 rounded-full">
                  {sub.badge}
                </span>
              )}
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default SidebarMenuItem;
