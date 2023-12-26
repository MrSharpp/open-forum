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
import { Profile } from "./Profile";
import { Button } from "./ui/button";

import { cn } from "@/lib/utils";
import LogoutBtn from "./LogoutBtn";

export async function Header() {
  const session = await getServerSession(authOptions);

  const categories: string[] = ["a", "b"];

  return (
    <div className="flex items-center h-16 px-4 border-b shrink-0 md:px-6 bg-white dark:bg-gray-900">
      <Link
        className="flex items-center gap-2 text-lg font-semibold sm:text-base mr-4"
        href="#"
      >
        <span className="text-gray-900 dark:text-gray-100">Forum</span>
      </Link>

      <NavigationMenu className="hidden font-medium sm:flex flex-row items-center gap-5 text-sm lg:gap-6 ml-10">
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
                  {categories.map((cat) => (
                    <li key={cat}>
                      <NavigationMenuLink asChild>
                        <Link
                          href={"#"}
                          className={cn(
                            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          )}
                        >
                          Hello
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

      <div className="flex items-center w-min gap-4 md:ml-auto md:gap-2 lg:gap-4">
        {!session ? (
          <>
            <div className="ml-auto">
              <Profile session={session} />
            </div>

            <Button variant="default">
              <span className="sr-only">Register</span>
              Register
            </Button>
          </>
        ) : (
          <LogoutBtn />
        )}
      </div>
    </div>
  );
}
