import Link from "next/link";
import { Button } from "./ui/button";

export function Header() {
  return (
    <div className="flex items-center h-16 px-4 border-b shrink-0 md:px-6 bg-white dark:bg-gray-900">
      <Link
        className="flex items-center gap-2 text-lg font-semibold sm:text-base mr-4"
        href="#"
      >
        {/* <FacebookIcon className="w-6 h-6" /> */}
        <span className="text-gray-900 dark:text-gray-100">Forum</span>
      </Link>
      <nav className="hidden font-medium sm:flex flex-row items-center gap-5 text-sm lg:gap-6">
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
        <Button className="rounded-full ml-auto" variant="outline">
          <span className="sr-only">Login</span>
          Login
        </Button>
        <Button className="rounded-full" variant="default">
          <span className="sr-only">Register</span>
          Register
        </Button>
      </div>
    </div>
  );
}
