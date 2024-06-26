import React, { ReactNode } from "react";
import {
  IconHome,
  IconUserQuestion,
  IconTag,
  IconUsers,
  IconBriefcase2,
} from "@tabler/icons-react";
import Link from "next/link";

type MenuItems = { title: string; path: string; icon: ReactNode }[];

export async function UserLeftSideBar() {
  const menuItems: MenuItems = [
    {
      title: "Profile",
      path: "profile",
      icon: <IconHome size={20} />,
    },
    {
      title: "Account",
      path: "account",
      icon: <IconUserQuestion size={20} />,
    },
  ];

  // TODO: Highlight the current route

  return (
    <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
      <ul className="space-y-2 font-medium">
        {menuItems.map((item) => (
          <li key={item.title}>
            <Link href={`${item.path}`} key={item.title}>
              <div className="flex items-center p-2 text-gray-900 rounded-lg gap-2 hover:bg-gray-100 group">
                {item.icon} {item.title}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
