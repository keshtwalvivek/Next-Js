"use client";
import Link from "next/link";
import React from "react";

function CustomNavBar() {
  return (
    <nav className="flex justify-between items-center bg-blue-600 h-12 py-2 px-3">
      <div className="brand">
        <h1>
          <Link href="/">Work Manager</Link>
        </h1>
      </div>
      <div>
        <ul className="flex space-x-4">
          <li className="hover:text-black ">
            <Link href={"/"}>Home</Link>
          </li>
          <li className="hover:text-black ">
            <Link href={"/add-task"}>Add Task</Link>
          </li>
          <li className="hover:text-black ">
            <Link href={""}>Show Task</Link>
          </li>
        </ul>
      </div>
      <div>
        <ul className="flex space-x-4">
          <li className="hover:text-black ">
            <Link href={""}>Login</Link>
          </li>
          <li className="hover:text-black ">
            <Link href={""}>SignIn</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default CustomNavBar;
