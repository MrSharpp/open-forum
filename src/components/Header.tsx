import Link from "next/link";
import { Button } from "./ui/button";
import { Profile } from "./Profile";
import { getServerSession } from "next-auth";

export async function Header() {
  const session = await getServerSession();
  return (
    <div className="flex items-center h-16 px-4 border-b shrink-0 md:px-6 bg-white dark:bg-gray-900">
      <Link
        className="flex items-center gap-2 text-lg font-semibold sm:text-base mr-4"
        href="#"
      >
        <span className="text-gray-900 dark:text-gray-100">Forum</span>
      </Link>
      <nav className="hidden font-medium sm:flex flex-row items-center gap-5 text-sm lg:gap-6 ml-10">
        <Link className="text-gray-500 dark:text-gray-400" href="#">
          Home
        </Link>
        <Link className="text-gray-500 dark:text-gray-400" href="#">
          Categories
        </Link>
        <Link className="font-bold" href="#">
          Latest
        </Link>
      </nav>
      <div className="flex items-center w-full gap-4 md:ml-auto md:gap-2 lg:gap-4">
        <div className="ml-auto">
          <Profile session={session} />
        </div>
        <Button variant="default">
          <span className="sr-only">Register</span>
          Register
        </Button>
      </div>
    </div>
  );
}
