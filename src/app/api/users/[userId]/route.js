import { User } from "@/model/users";
const { NextResponse } = require("next/server");

// get users by id
export async function GET(request, { params }) {
  const { userId } = params;

  try {
    const user = await User.findById(userId);
    return NextResponse.json(user);
  } catch (err) {
    return NextResponse.json({
      message: "user not found",
    });
  }
}

// delete data using id
export async function DELETE(request, { params }) {
  const { userId } = params;

  try {
    await User.deleteOne({
      _id: userId,
    });
    return NextResponse.json({
      message: "User deleted",
      success: true,
    });
  } catch (err) {
    return NextResponse.json({
      message: "User Not deleted",
      success: false,
    });
  }
}

// update user Data
export async function PUT(request, { params }) {
  const { userId } = params;
  const { name, email, password, about, profileUrl } = await request.json();

  try {
    const user = await User.findById(userId);

    user.name = name;
    user.email = email;
    user.password = password;
    user.about = about;
    user.profileUrl = profileUrl;

    const updateUser = await user.save();
    return NextResponse.json(updateUser);
  } catch (err) {
    return NextResponse.json({
      message: "Error Updating user",
      success: false,
    });
  }
}
