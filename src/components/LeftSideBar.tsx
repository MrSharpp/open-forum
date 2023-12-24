import React from "react";
import {
  IconHome,
  IconUserQuestion,
  IconTag,
  IconUsers,
  IconBriefcase2,
} from "@tabler/icons-react";

const Navbar = () => {
  return (
    <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
      <ul className="space-y-2 font-medium">
        <li>
          <div className="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-100 group">
            <IconHome size={20} />
            <span className="ms-3">Dashboard</span>
          </div>
        </li>

        <li>
          <div className="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-100 group">
            <IconUserQuestion size={20} />
            <span className="ms-3">Questions</span>
          </div>
        </li>

        <li>
          <div className="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-100 group mb-6">
            <IconTag size={20} />
            <span className="ms-3">Tags</span>
          </div>
        </li>

        <li>
          <div className="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-100 group">
            <IconUsers size={20} />
            <span className="ms-3">Users</span>
          </div>
        </li>

        <li>
          <div className="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-100 group">
            <IconBriefcase2 size={20} />
            <span className="ms-3">Companies</span>
          </div>
        </li>

        <li>
          <div className="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-100 group">
            <IconTag size={20} />
            <span className="ms-3">UnAnswered</span>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
