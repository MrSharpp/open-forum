import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { authOptions } from "@/lib-server/auth";
import { getServerSession } from "next-auth/next";
import Link from "next/link";
import { Notifications } from "./Notifications";
import { Profile } from "./Profile";
import { ProfileMenu } from "./ProfileMenu";
import SearchModal from "./Search/SearchModal";
import { getCategories, getUserNotifications } from "./action";
import { Button } from "./ui/button";

import { cn } from "@/lib/utils";

export async function Header() {
  const session = await getServerSession(authOptions);

  let notifs;

  if (!!session) {
    notifs = await getUserNotifications(session.user.id as string);
  }

  const categories = await getCategories();

  return (
    <div className="flex items-center justify-between h-16 px-4 border-b shrink-0 md:px-6 bg-white dark:bg-gray-900">
      <div className="flex gap-10">
        <Link
          className="flex items-center gap-2 text-lg font-semibold sm:text-base mr-4"
          href="#"
        >
          <span className="text-gray-900 dark:text-gray-100">Forum</span>
        </Link>

        <NavigationMenu className="hidden font-medium sm:flex flex-row items-center gap-5 text-sm lg:gap-6">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={
                  "group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                }
              >
                <Link href="/">Home</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>Categories</NavigationMenuTrigger>

              {categories.length && (
                <NavigationMenuContent>
                  <ul className="grid w-[300px] gap-3 p-4 md:w-[400px] md:grid-cols-3 sm:grid-cols-2 lg:w-[500px] ">
                    {categories.map((category) => (
                      <li key={category.id}>
                        <NavigationMenuLink asChild>
                          <Link
                            href={`/category/${category.id}`}
                            className={cn(
                              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            )}
                          >
                            {category.name}
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              )}
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink
                className={
                  "group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                }
                asChild
              >
                <Link href="/latest">Latest</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      <div className="w-44">
        <SearchModal />
      </div>

      <div className="flex items-center w-min gap-4 md:gap-2 lg:gap-4">
        {!session ? (
          <>
            <div className="ml-auto">
              <Profile session={session} />
            </div>

            <Button variant="default">Register</Button>
          </>
        ) : (
          <div className="flex gap-10 mr-20">
            {/* TODO: Style A Button component upon Link which has styling of button but behind the scenne is made upon Link */}
            <Link href="/thread/create">New Post</Link>
            <Notifications notifications={notifs || []} />
            <ProfileMenu />
          </div>
        )}
      </div>
    </div>
  );
}
