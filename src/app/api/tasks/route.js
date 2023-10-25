import { getResponseMessage } from "@/helper/responseMessage";
import { Task } from "@/model/task";
import { NextResponse } from "next/server";

// get all the tasks
export async function GET(request) {
  let tasks = [];
  try {
    tasks = await Task.find();
  } catch (error) {
    console.log(error);
    return getResponseMessage("error in getting data", false, 404);
  }
  return NextResponse.json(tasks);
}

// create a new task
export async function POST(request) {
  const { title, description, userId } = await request.json();

  try {
    const task = new Task({
      title,
      description,
      userId,
    });

    const createdTask = await task.save();

    return NextResponse.json(createdTask, {
      message: "Task saved successfully",
      success: true,
    });
  } catch (err) {
    return getResponseMessage("Failed to Create Task", false, 404);
  }
}
