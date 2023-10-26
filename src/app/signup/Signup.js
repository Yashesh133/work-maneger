"use client";

import React from "react";
import signup from "../../assets/signup.svg";
import Image from "next/image";

const Signup = () => {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-4 col-start-5 m-5">
        <div>
          <h1 className="text-3xl">Sign Up Here !!</h1>
          <form method="#">
            <div className="mt-3 flex justify-center flex-col">
              <label
                htmlFor="username"
                className="mb-2 text-sm font-medium text-gray-900 dark:text-white flex item-center mr-3"
              >
                Enter username
              </label>
              <input
                type="text"
                id="username"
                className="w-3/4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>
            <div className="mt-3 flex justify-center flex-col">
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
              />
            </div>
            <div className="mt-3 flex justify-center  flex-col">
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
              />
            </div>
            <div className="mt-3 flex justify-center flex-col">
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
              ></textarea>
            </div>
            <div className="mt-3">
              <button className="w-28 p-2 m-2 bg-green-600 rounded">
                Signup
              </button>
              <button className="w-28 p-2 m-2 bg-red-600 rounded">Reset</button>
            </div>
          </form>
        </div>
      </div>
      <div className="col-span-2 col-start-9 mt-36">
        <div>
          <Image
            src={signup}
            alt="signup banner"
            style={{
              maxWidth: "500px",
            }}
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default Signup;
