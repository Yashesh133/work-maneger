import { getResponseMessage } from "@/helper/responseMessage";
import { Task } from "@/model/task";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { userId } = params;

  try {
    const tasks = await Task.find({
      userId: userId,
    });

    return NextResponse.json(tasks);
  } catch (error) {
    return getResponseMessage("Task Not Find", false, 404);
  }
}
