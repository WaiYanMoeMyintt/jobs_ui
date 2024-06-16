import React from "react";
import Link from "next/link";
const Header = () => {
  return (
    <header>
      <div className="flex justify-between items-center  mx-auto">
        <Link href="/" className="font-bold text-xl">
          Job Board
        </Link>
        <nav className="flex gap-4 *:py-2 *:px-4 *:rounded-md">
          <Link className="bg-gray-200" href={"/login"}>
            Login
          </Link>
          <Link className="bg-blue-600 text-white " href={"/new-listing"}>
            Post a Job
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
