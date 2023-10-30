import { User } from "@/model/users";
import { NextResponse } from "next/server";
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

export async function POST(request) {
  const { email, password } = await request.json();

  try {
    const user = await User.findOne({ email: email });

    if (user == null) {
      throw new Error("Email Couldn't find");
    }
    const matched = bcrypt.compareSync(password, user.password);
    if (!matched) {
      throw new Error("Password couldn't match");
    }

    const token = jwt.sign(
      {
        _id: user._id,
        name: user.name,
      },
      process.env.JWT_KEY
    );

    const response = NextResponse.json({
      message: "success",
      success: true,
      user: user,
    });

    response.cookies.set("loginToken", token, {
      expiresId: "1d",
      httpOnly: true,
    });

    return response;
  } catch (error) {
    return NextResponse.json({
      message: error.message,
      success: false,
    });
  }
}
