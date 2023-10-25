import { getResponseMessage } from "@/helper/responseMessage";
import { Task } from "@/model/task";
import { NextResponse } from "next/server";

// get single task
export async function GET(request, { params }) {
  const { taskId } = params;

  try {
    const task = await Task.findById(taskId);
    return NextResponse.json(task);
  } catch (error) {
    return getResponseMessage("Task not found", false, 404);
  }
}

// Delete the task
export async function DELETE(request, { params }) {
  const { taskId } = params;
  try {
    await Task.deleteOne({
      _id: taskId,
    });
    return getResponseMessage("User deleted", true, 201);
  } catch (err) {
    return getResponseMessage("User Not deleted", false, 404);
  }
}

// update the task
export async function PUT(request, { params }) {
  const { taskId } = params;
  const { title, description, addDate, status } = await request.json();
  try {
    const task = await Task.findById(taskId);
    task.title = title;
    task.description = description;
    task.addDate = addDate;
    task.status = status;

    const updatedTask = await task.save();
    return NextResponse.json(updatedTask);
  } catch (error) {
    console.log(error);
    return getResponseMessage("Error in update Task ", false, 404);
  }
}
