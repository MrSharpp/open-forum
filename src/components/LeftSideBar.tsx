import React, { ReactNode } from "react";
import {
  IconHome,
  IconUserQuestion,
  IconTag,
  IconUsers,
  IconBriefcase2,
} from "@tabler/icons-react";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { authOptions } from "@/lib-server/auth";
import { getServerSession } from "next-auth";
import { UserRole } from "@prisma/client";

type MenuItems = {
  title: string;
  access?: UserRole[];
  list: { title: string; path: string; icon: ReactNode }[];
}[];

export async function Navbar() {
  const session = await getServerSession(authOptions);

  const menuItems: MenuItems = [
    {
      title: "",
      list: [
        {
          title: "Home",
          path: "/",
          icon: <IconHome size={20} />,
        },
        {
          title: "Questions",
          path: "/questions",
          icon: <IconUserQuestion size={20} />,
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
          title: "Categories",
          path: "/categories",
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
      access: [UserRole.ADMIN],
      list: [
        {
          title: "Moderators",
          path: "/admin/moderators",
          icon: <IconHome size={20} />,
        },
        {
          title: "Categories",
          path: "/admin/categories",
          icon: <IconHome size={20} />,
        },
        {
          title: "Tags",
          path: "/admin/tags",
          icon: <IconHome size={20} />,
        },
        {
          title: "Settings",
          path: "/admin/settings",
          icon: <IconHome size={20} />,
        },
      ],
    },
  ];

  // TODO: Highlight the current route

  return (
    <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
      <ul className="space-y-2 font-medium">
        {menuItems
          .filter((item) => {
            if (!item.access?.length) return true;
            return item.access.includes(session?.user.role as UserRole);
          })
          .map((item) => (
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
}

export default Navbar;
