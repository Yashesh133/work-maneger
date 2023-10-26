"use client";

import { Box, Typography } from "@mui/material";
import Link from "next/link";

export default function Home() {
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
        <Typography variant="h6" mx={"12px"}>
          <Link href="/">Home</Link>
        </Typography>
        <Typography variant="h6" mx={"12px"}>
          <Link href="addTask">Add Task</Link>
        </Typography>
        <Typography variant="h6" mx={"12px"}>
          <Link href="/viewTask">Show Task</Link>
        </Typography>
      </Box>
      <Box display={"flex"}>
        <Typography variant="h6" mx={"12px"}>
          <Link href="#">Login</Link>
        </Typography>
        <Typography variant="h6" mx={"12px"}>
          <Link href="/signup">Sign Up</Link>
        </Typography>
      </Box>
    </Box>
  );
}
