"use client";
import React, { useContext, useState } from "react";
import Image from "next/image";
import { Box } from "@mui/material";
import { toast } from "react-toastify";
import formImage from "../../../public/form.png";
import { addTask } from "@/services/taskService";
import userContext from "@/context/userContext";

const AddTask = () => {
  const contextData = useContext(userContext);

  const userId = contextData.user?._id;

  const [task, setTask] = useState({
    title: "",
    description: "",
    status: "",
    userId: userId,
  });

  const handleSave = async (event) => {
    event.preventDefault();

    try {
      await addTask(task);
      toast.success("Task added successfully", {
        position: "top-center",
      });
      setTask({
        title: "",
        description: "",
        status: "none",
      });
    } catch (error) {
      toast.error("Task not added successfully", {
        position: "top-center",
      });
    }
  };

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Box>
        <Image src={formImage} />
      </Box>
      <Box width={"500px"} height={"auto"} margin={"10px"} padding={"20px"}>
        <form action="#">
          <div className="mb-6">
            <label
              htmlFor="Title"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Enter Title
            </label>
            <input
              type="text"
              id="text"
              value={task.title}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
              onChange={(event) => {
                setTask({
                  ...task,
                  title: event.target.value,
                });
              }}
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="Description"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Enter Description
            </label>
            <textarea
              type="text"
              id="text"
              value={task.description}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
              rows={8}
              onChange={(event) => {
                setTask({
                  ...task,
                  description: event.target.value,
                });
              }}
            />
          </div>

          <label
            htmlFor="Status"
            className="block mb-2 mt-4 text-sm font-medium text-gray-900 dark:text-white"
          >
            Select an Status
          </label>
          <select
            id="Status"
            onChange={(event) => {
              setTask({
                ...task,
                status: event.target.value,
              });
            }}
            value={task.status}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value={"none"} selected disabled>
              Choose a Status
            </option>
            <option value="Pending">Pending</option>
            <option value="completed">completed</option>
          </select>
          <div className="flex justify-center mt-5">
            <button
              type="button"
              onClick={handleSave}
              className="m-3  text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Save Task
            </button>
            <button
              type="button"
              className="m-3  text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800"
            >
              Cancel
            </button>
          </div>
        </form>
      </Box>
    </Box>
  );
};

export default AddTask;
