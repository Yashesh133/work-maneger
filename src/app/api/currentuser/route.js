import { User } from "@/model/users";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

export async function GET(request) {
  const token = request.cookies.get("loginToken").value;

  const data = jwt.verify(token, process.env.JWT_KEY);

  const user = await User.findById(data._id).select("-password");

  return NextResponse.json(user);
}
