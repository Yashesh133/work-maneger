"use client";
import React, { useEffect, useState } from "react";
import userContext from "./userContext";
import { toast } from "react-toastify";
import { currentUser } from "@/services/userService";

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    async function loadData() {
      try {
        const currentuser = await currentUser();

        setUser({ ...currentuser });
      } catch (error) {
        toast.error("Error in getting user", {
          position: "top-center",
        });
        setUser(undefined);
      }
    }
    loadData();
  }, []);

  return (
    <userContext.Provider value={{ user, setUser }}>
      {children}
    </userContext.Provider>
  );
};

export default UserProvider;
