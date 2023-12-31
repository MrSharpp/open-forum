import React from "react";
import {
  IconHome,
  IconUserQuestion,
  IconTag,
  IconUsers,
  IconBriefcase2,
} from "@tabler/icons-react";
import Link from "next/link";
import { UserRole } from "@/lib-server/enums";

const Navbar = () => {
  const menuItems = [
    {
      title: "",
      list: [
        {
          title: "Dashboard",
          path: "/dashboard",
          icon: <IconHome size={20} />,
          roles: [UserRole.ADMIN, UserRole.USER, UserRole.MODERATOR],
        },
        {
          title: "Questions",
          path: "/questions",
          icon: <IconUserQuestion size={20} />,
          roles: [UserRole.ADMIN, UserRole.USER, UserRole.MODERATOR],
        },
        {
          title: "Tags",
          path: "/tags",
          icon: <IconTag size={20} />,
        },
        {
          title: "Users",
          path: "/users",
          icon: <IconUsers size={20} />,
        },
        {
          title: "Companies",
          path: "/companies",
          icon: <IconBriefcase2 size={20} />,
        },
        {
          title: "UnAnswered",
          path: "/unAnswered",
          icon: <IconTag size={20} />,
        },
      ],
    },
    {
      title: "Admin",
      list: [
        {
          title: "Moderators",
          path: "/moderators",
          icon: <IconHome size={20} />,
        },
        {
          title: "Categories",
          path: "/categories",
          icon: <IconHome size={20} />,
        },
        {
          title: "Tags",
          path: "/tags",
          icon: <IconHome size={20} />,
        },
        {
          title: "Settings",
          path: "/settings",
          icon: <IconHome size={20} />,
        },
      ],
    },
  ];

  return (
    <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
      <ul className="space-y-2 font-medium">
        {menuItems.map((item) => (
          <li key={item.title}>
            {item.title}
            {item.list.map((menuItems) => (
              <Link href={`${menuItems.path}`} key={menuItems.title}>
                <div className="flex items-center p-2 text-gray-900 rounded-lg gap-2 hover:bg-gray-100 group">
                  {menuItems.icon} {menuItems.title}
                </div>
              </Link>
            ))}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
