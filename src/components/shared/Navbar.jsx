"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathName = usePathname();

  return (
    <nav className="bg-gray-800 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          My Site
        </Link>
        <ul className="flex space-x-6">
          <li>
            <Link
              href="/"
              className={`px-4 py-2 rounded-md ${
                pathName === "/" ? "bg-blue-600" : "hover:bg-gray-700"
              }`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className={`px-4 py-2 rounded-md ${
                pathName === "/about" ? "bg-blue-600" : "hover:bg-gray-700"
              }`}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className={`px-4 py-2 rounded-md ${
                pathName === "/contact" ? "bg-blue-600" : "hover:bg-gray-700"
              }`}
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              href="/login"
              className="px-4 py-2 rounded-md hover:bg-gray-700"
            >
              Login
            </Link>
          </li>
          <li>
            <Link
              href="/register"
              className="px-4 py-2 rounded-md hover:bg-gray-700"
            >
              Register
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
