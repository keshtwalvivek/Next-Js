"use client";
import UserContext from "@/context/userContext";
import { logout } from "@/services/userService";
import Link from "next/link";
import React, { useContext } from "react";
import { toast } from "react-toastify";

function CustomNavBar() {
  const context = useContext(UserContext);
  console.log(context);

  const doLogout = async () => {
    try {
      const result = await logout();
      console.log(result);
      context.setUser(undefined);
    } catch (error) {
      console.log(error);
      toast.error("Logout Error");
    }
  };

  return (
    <nav className="flex justify-between items-center bg-blue-600 h-12 py-2 px-3">
      <div className="brand">
        <h1>
          <Link href="/">Work Manager</Link>
        </h1>
      </div>
      <div>
        <ul className="flex space-x-4">
          {context.user && (
            <>
              <li className="hover:text-black ">
                <Link href={"/"}>Home</Link>
              </li>
              <li className="hover:text-black ">
                <Link href={"/add-task"}>Add Task</Link>
              </li>
              <li className="hover:text-black ">
                <Link href={"/show-tasks"}>Show Task</Link>
              </li>
            </>
          )}
        </ul>
      </div>
      <div>
        <ul className="flex space-x-4">
          {context.user && (
            <>
              <li className="hover:text-black ">
                <Link href={"#!"}>{context.user.name}</Link>
              </li>
              <li className="hover:text-black ">
                <Link href={"#!"} onClick={doLogout}>
                  Logout
                </Link>
              </li>
            </>
          )}

          {!context.user && (
            <>
              <li className="hover:text-black ">
                <Link href={"/login"}>Login</Link>
              </li>
              <li className="hover:text-black ">
                <Link href={"/signup"}>Signup</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default CustomNavBar;
