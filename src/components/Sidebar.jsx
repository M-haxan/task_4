import React from 'react';
import { Inbox, Mail } from '@mui/icons-material';

const Sidebar = () => {
  const menuTop = ['Inbox', 'Starred', 'Send email', 'Drafts'];
  const menuBottom = ['All mail', 'Trash', 'Spam', ''];

  return (
    <div className="hidden sm:flex fixed top-14 w-60 h-[calc(100vh-4rem)] flex-col bg-white shadow-md z-40">
      <div className="flex-1 overflow-y-auto">
        <ul className="p-2">
          {menuTop.map((item, index) => (
            <li key={item}>
              <button className="flex items-center w-full p-2 hover:bg-gray-100 rounded-md">
                <span className="mr-3">
                  {index % 2 === 0 ? <Inbox fontSize="small" /> : <Mail fontSize="small" />}
                </span>
                <span>{item}</span>
              </button>
            </li>
          ))}
        </ul>
        <hr className="my-2" />
        <ul className="p-2">
          {menuBottom.map((item, index) => (
            <li key={item}>
              <button className="flex items-center w-full p-2 hover:bg-gray-100 rounded-md">
                <span className="mr-3">
                  {index % 2 === 0 ? <Inbox fontSize="small" /> : <Mail fontSize="small" />}
                </span>
                <span>{item}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
