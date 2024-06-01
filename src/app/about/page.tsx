import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <>
      <div className="flex justify-center ">
        This Website made by{" "}
        <span className="text-xl text-gray-900 pl-2">Ritik Giri</span>
      </div>
      <div className="text-center text-gray-700">
        <Link href="http://codewithritik.tech/">My PortFolio</Link>
      </div>
    </>
  );
}
