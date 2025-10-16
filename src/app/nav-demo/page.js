"use client";

import Link from "next/link";
import React from "react";
import { useState, useEffect } from "react";

const page = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="w-full h-[150vh] bg-blue-200">
      {/* Navbar */}
      <div
        className={`${
          isScrolled ? "w-1/2" : "w-full"
        } h-16 bg-white flex items-center justify-center px-4 m-auto sticky top-0`}
      >
        <div className="container flex flex-row justify-between items-center mx-auto">
          <h1 className="text-2xl">My Navbar</h1>
          <Link href="/" className="">
            Home
          </Link>
          <Link href="/" className="">
            Home1
          </Link>
          <Link href="/" className="">
            Home2
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;
