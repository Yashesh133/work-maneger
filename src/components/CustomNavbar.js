"use client";

import userContext from "@/context/userContext";
import { logout } from "@/services/userService";
import { Box, Typography } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function Home() {
  const router = useRouter();
  const context = useContext(userContext);

  const handleLogOut = async () => {
    try {
      const result = await logout();
      context.setUser(undefined);
      router.push("/login");
    } catch (error) {
      toast.error("Couldn't log out");
    }
  };
  return (
    <Box
      sx={{
        backgroundColor: "blue",
        height: "auto",
        width: "100%",
        p: "10px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Box>
        <Typography variant="h4">
          <a href="#">Work Manager</a>
        </Typography>
      </Box>
      <Box display={"flex"}>
        {context.user && (
          <>
            <Typography variant="h6" mx={"12px"}>
              <Link href="/">Home</Link>
            </Typography>
            <Typography variant="h6" mx={"12px"}>
              <Link href="addTask">Add Task</Link>
            </Typography>
            <Typography variant="h6" mx={"12px"}>
              <Link href="/viewTask">Show Task</Link>
            </Typography>
          </>
        )}
      </Box>
      <Box display={"flex"}>
        {context.user && (
          <>
            <Typography variant="h6" mx={"12px"}>
              {context.user.name}
            </Typography>
            <Typography variant="h6" mx={"12px"}>
              <button onClick={handleLogOut}>Log Out</button>
            </Typography>
          </>
        )}

        {!context.user && (
          <>
            <Typography variant="h6" mx={"12px"}>
              <Link href="/login">Login</Link>
            </Typography>
            <Typography variant="h6" mx={"12px"}>
              <Link href="/signup">Sign Up</Link>
            </Typography>
          </>
        )}
      </Box>
    </Box>
  );
}
