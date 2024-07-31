"use client";
import { login, signUp } from "@/services/userService";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "react-toastify";

function Login() {
  const router = useRouter();
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleLogin = async (e) => {
    e.preventDefault();
    if (loginData.email.trim() === "" || loginData.email === null) {
      toast.warning("Email is required !!");
      return;
    }
    if (loginData.password.trim() === "" || loginData.password === null) {
      toast.warning("Password is required !!");
      return;
    }
    try {
      const result = await login(loginData);
      console.log(result);
      toast.success("Logged in");
      router.push("/profile/user");
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message, {
        position: "top-center",
      });
    }
  };

  const resetForm = () => {
    setLoginData({
      email: "",
      password: "",
    });
  };
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-4 col-start-5 ">
        <div className="py-5"></div>
        <h1 className="text-3xl text-center">Login here</h1>
        <form action="#!" onSubmit={handleLogin}>
          <div className="mt-3">
            <label
              htmlFor="user_name"
              className="block text-sm font-medium mb-2 ps-3"
            >
              Email
            </label>
            <input
              type="email"
              className="w-full p-3 rounded-2xl bg-gray-800 focus:ring-gray-400"
              placeholder="Enter here"
              id="user_email"
              name="user_email"
              onChange={(e) => {
                setLoginData({ ...loginData, email: e.target.value });
              }}
              value={loginData.email}
            />
          </div>
          {/* password */}
          <div className="mt-3">
            <label
              htmlFor="user_name"
              className="block text-sm font-medium mb-2 ps-3"
            >
              Password
            </label>
            <input
              type="password"
              className="w-full p-3 rounded-2xl bg-gray-800 focus:ring-gray-400"
              placeholder="Enter here"
              id="user_password"
              name="user_password"
              onChange={(e) => {
                setLoginData({ ...loginData, password: e.target.value });
              }}
              value={loginData.password}
            />
          </div>
          <div>
            <button
              type="submit"
              className="px-2 py-2 my-2 bg-green-600 ms-3 rounded hover:bg-green-700"
            >
              Login
            </button>
            <button
              onClick={resetForm}
              className="px-2 py-2 bg-red-600 rounded ms-3 hover:bg-green-700"
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
