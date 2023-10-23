import { connectDb } from "@/helper/db";
import { User } from "@/model/users";
import { NextResponse } from "next/server";

connectDb();

export async function GET() {
  // const users = [
  //   {
  //     name: "John",
  //     phone: "152",
  //     email: "john@example.com",
  //   },
  //   {
  //     name: "John12",
  //     phone: "15212234",
  //     email: "john12@example.com",
  //   },
  //   {
  //     name: "John23",
  //     phone: "152123",
  //     email: "john23@example.com",
  //   },
  // ];
  let users = [];
  try {
    users = await User.find();
  } catch (err) {
    console.log("Couldn't find", err);
    return NextResponse.json({
      message: "Couldn't find"
    })
  }

  return NextResponse.json(users);
}
// create user
export async function POST(request) {
  // fetch user information
  const { name, email, password, about, profileUrl } = await request.json();

  // create user object with user model
  const user = new User({
    name,
    email,
    password,
    about,
    profileUrl,
  });

  try {
    const createdUser = await user.save();

    const response = NextResponse.json(user, {
      Message: "success",
    });

    return response;
  } catch (err) {
    console.log("Error", err);
    return NextResponse.json({
      Message: "failed to create user",
    });
  }
}
