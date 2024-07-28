"use client";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { signUp } from "@/services/userService";
function Signup() {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    about: "",
    profileURL:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXxM1n_GsJCcMSp8f62Qtd4a_z-1NfwvkMmQ&s",
  });

  const doSubmit = async (e) => {
    e.preventDefault();
    console.log(data);
    if (data.name.trim() === "" || data.name === null) {
      toast.warning("Name is required !!");
      return;
    }
    if (data.email.trim() === "" || data.email === null) {
      toast.warning("Email is required !!");
      return;
    }
    if (data.password.trim() === "" || data.password === null) {
      toast.warning("Password is required !!");
      return;
    }
    if (data.about.trim() === "" || data.about === null) {
      toast.warning("About is required !!");
      return;
    }

    try {
      const result = await signUp(data);
      console.log(result);
      toast.success("User is register", {
        position: "top-center",
      });

      setData({
        name: "",
        email: "",
        password: "",
        about: "",
        profileURL:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXxM1n_GsJCcMSp8f62Qtd4a_z-1NfwvkMmQ&s",
      });
    } catch (error) {
      console.log(error);
      toast.error("Signup Error!!" + error.response.data.message, {
        position: "top-center",
      });
    }
  };
  const resetForm = () => {
    setData({
      name: "",
      email: "",
      password: "",
      about: "",
      profileURL:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXxM1n_GsJCcMSp8f62Qtd4a_z-1NfwvkMmQ&s",
    });
  };
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-4 col-start-5 ">
        <div className="py-5">
          <div className="flex justify-center">
            <img src="./signup.svg" style={{ width: "40%" }} />
          </div>
          <h1 className="text-3xl text-center">Signup here</h1>
          <form action="#!" className="mt-5" onSubmit={doSubmit}>
            {/* username */}

            <div className="mt-3">
              <label
                htmlFor="user_name"
                className="block text-sm font-medium mb-2 ps-3"
              >
                Username
              </label>
              <input
                type="text"
                className="w-full p-3 rounded-2xl bg-gray-800 focus:ring-gray-400"
                placeholder="Enter here"
                id="user_name"
                name="user_name"
                onChange={(e) => {
                  setData({ ...data, name: e.target.value });
                }}
                value={data.name}
              />
            </div>
            {/* email */}
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
                  setData({ ...data, email: e.target.value });
                }}
                value={data.email}
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
                  setData({ ...data, password: e.target.value });
                }}
                value={data.password}
              />
            </div>
            {/* about */}
            <div className="mt-3">
              <label
                htmlFor="user_name"
                className="block text-sm font-medium mb-2 ps-3"
              >
                About
              </label>
              <textarea
                type="text"
                className="w-full p-3 rounded-2xl bg-gray-800 focus:ring-gray-400"
                placeholder="Enter here"
                id="user_about"
                name="user_about"
                rows={3}
                onChange={(e) => {
                  setData({ ...data, about: e.target.value });
                }}
                value={data.about}
              />
            </div>
            <button
              type="submit"
              className="px-2 py-3 bg-green-600 ms-3 rounded hover:bg-green-700"
            >
              Signup
            </button>
            <button
              onClick={resetForm}
              className="px-2 py-3 bg-red-600 rounded ms-3 hover:bg-green-700"
            >
              Reset
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
