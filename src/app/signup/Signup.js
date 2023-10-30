"use client";

import React, { useState } from "react";
import signup from "../../assets/signup.svg";
import Image from "next/image";
import { toast } from "react-toastify";
import { addUser } from "@/services/userService";

const Signup = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    about: "",
    profileUrl:
      "https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png",
  });

  const handleUser = async () => {
    // Validation for the name field
    if (user.name.trim() === "") {
      toast.warning("Please enter a username", {
        position: "top-center",
      });
      return;
    }

    // Validation for the email field
    if (!user.email.match(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/)) {
      toast.warning("Please enter a valid email address", {
        position: "top-center",
      });
      return;
    }

    // Validation for the password field
    if (user.password.length < 6) {
      toast.warning("Password must be at least 6 characters long", {
        position: "top-center",
      });
      return;
    }

    // Validation for the about field
    if (user.about.trim() === "") {
      toast.warning("Please provide information about yourself", {
        position: "top-center",
      });
      return;
    }

    // If all fields are valid, you can proceed with the form submission

    try {
      const result = await addUser(user);
      toast.success("user added successfully", {
        position: "top-center",
      });
      setUser({
        name: "",
        email: "",
        password: "",
        about: "",
      });
    } catch (error) {
      toast.error("user Not Created", {
        position: "top-center",
      });
    }
  };

  const handleClearFrom = () => {
    setUser({
      name: "",
      email: "",
      password: "",
      about: "",
    });
  };

  return (
    <div className="grid grid-cols-12">
      <div className="col-span-4 col-start-5 m-5">
        <div>
          <div className="flex items-center justify-center flex-col">
            <h1 className="text-3xl mb-3">Sign Up Here !!</h1>
            <Image
              className="text-center"
              src={signup}
              alt="signup banner"
              style={{
                maxWidth: "200px",
              }}
            ></Image>
          </div>

          <form method="#">
            <div className="mt-3 flex justify-center items-center flex-col">
              <label
                htmlFor="username"
                className="mb-2 text-sm font-medium text-gray-900 dark:text-white flex item-center mr-3"
              >
                Enter username
              </label>
              <input
                type="text"
                id="username"
                value={user.name}
                onChange={(event) => {
                  setUser({
                    ...user,
                    name: event.target.value,
                  });
                }}
                className="w-3/4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>
            <div className="mt-3 flex justify-center flex-col items-center">
              <label
                htmlFor="email"
                className="mb-2 text-sm font-medium text-gray-900 dark:text-white flex item-center mr-3"
              >
                Enter Email
              </label>
              <input
                type="email"
                id="email"
                className="w-3/4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
                value={user.email}
                onChange={(event) => {
                  setUser({
                    ...user,
                    email: event.target.value,
                  });
                }}
              />
            </div>
            <div className="mt-3 flex justify-center  flex-col items-center">
              <label
                htmlFor="password"
                className="mb-2 text-sm font-medium text-gray-900 dark:text-white flex item-center mr-3"
              >
                Enter Password
              </label>
              <input
                type="password"
                id="password"
                className="w-3/4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
                value={user.password}
                onChange={(event) => {
                  setUser({
                    ...user,
                    password: event.target.value,
                  });
                }}
              />
            </div>
            <div className="mt-3 flex justify-center flex-col items-center">
              <label
                htmlFor="About"
                className="mb-2 text-sm font-medium text-gray-900 dark:text-white flex item-center mr-3"
              >
                About
              </label>
              <textarea
                type="text"
                id="About"
                className="w-3/4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
                rows={7}
                value={user.about}
                onChange={(event) => {
                  setUser({
                    ...user,
                    about: event.target.value,
                  });
                }}
              ></textarea>
            </div>
            <div className="mt-3 flex justify-center items-center">
              <button
                className="w-28 p-2 m-2 bg-green-600 rounded"
                onClick={handleUser}
              >
                Signup
              </button>
              <button
                className="w-28 p-2 m-2 bg-red-600 rounded"
                onClick={handleClearFrom}
              >
                Reset
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="col-span-2 col-start-9 mt-36"></div>
    </div>
  );
};

export default Signup;
