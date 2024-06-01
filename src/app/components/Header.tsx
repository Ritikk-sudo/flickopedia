import Image from "next/image";
import React from "react";
import logo from "../../../public/images/logo.png";
import Link from "next/link";

export default function Header() {
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link
          href="/"
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
        >
          <span className="ml-3 text-xl">
            <Image width={200} height={200} src={logo} alt="logo" />
          </span>
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          {/* <Link href="/" className="mr-5 hover:text-gray-900">
            Home
          </Link> */}
          <Link href="/about" className="m-auto hover:text-gray-900">
            About Us
          </Link>
        </nav>
      </div>
    </header>
  );
}
