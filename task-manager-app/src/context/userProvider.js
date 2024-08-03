"use client";

import React, { useEffect, useState } from "react";
import UserContext from "./userContext";
import { toast } from "react-toastify";
import { currentUser } from "@/services/userService";

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(undefined);

  const currentUserFunction = async () => {
    try {
      const CurrentUser = await currentUser();
      console.log(CurrentUser);
      setUser({ ...CurrentUser });
    } catch (error) {
      console.log(error);
      toast.error("error in loading user ");
      setUser(undefined);
    }
  };

  console.log("user : ", user);

  useEffect(() => {
    currentUserFunction();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
