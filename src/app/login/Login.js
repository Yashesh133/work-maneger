"use client";
import React, { useContext, useState } from "react";
import loginBanner from "../../assets/login.svg";
import Image from "next/image";
import { toast } from "react-toastify";
import {login} from "@/services/userService";
import { useRouter } from "next/navigation";
import userContext from "@/context/userContext";

const Login = () => {
  const router = useRouter();
  const context = useContext(userContext);
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const result = await login(loginData)
      toast.success("Login successful",{
        position: "top-center"
      })
      context.setUser(result.user)
      router.push("/")
    } catch (error) {
        toast.error("Couldn't login",{
          position: "top-center"
        })
    }

  }

  return (
    <div className="grid grid-cols-12">
      <div className="col-span-4 col-start-5 m-5">
        <div>
          <div className="flex items-center justify-center flex-col">
            <h1 className="text-3xl mb-3">Login Here !!</h1>
            <Image
              className="text-center"
              src={loginBanner}
              alt="signup banner"
              style={{
                maxWidth: "200px",
              }}
            ></Image>
          </div>
          <form method="#">
            <div className="mt-3 flex justify-center items-center flex-col">
              <label
                htmlFor="Email"
                className="mb-2 text-sm font-medium text-gray-900 dark:text-white flex item-center mr-3"
              >
                Enter Email
              </label>
              <input
                type="email"
                id="email"
                className="w-3/4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
                value={loginData.email}
                onChange={(event) => {
                  setLoginData({
                    ...loginData,
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
                value={loginData.password}
                onChange={(event) => {
                  setLoginData({
                    ...loginData,
                    password: event.target.value,
                  });
                }}
              />
            </div>
            <div className="mt-3 flex justify-center items-center">
              <button className="w-28 p-2 m-2 bg-green-600 rounded" onClick={handleLogin}>
                Login
              </button>
              <button className="w-28 p-2 m-2 bg-red-600 rounded">Reset</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
