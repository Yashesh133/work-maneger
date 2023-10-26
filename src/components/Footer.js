import { Box, Grid, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <Box
      sx={{
        height: "auto",
        width: "100%",
        backgroundColor: "blue",
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <Grid container>
        <Grid md={9}>
          <Box p={"50px"}>
            <Typography variant="h4">Welcome to Work Manager</Typography>
            <Typography>
              “Lorem ipsum” dummy text is used by many web-developers to test
              how their HTML templates will look with real data. Often,
              developers use third-party services to generate “Lorem ipsum”
              text,
            </Typography>
          </Box>
        </Grid>
        <Grid md={3}>
          <Box p={"50px"}>
            <Typography variant="h5">Important link</Typography>
            <Typography>Instagram</Typography>
            <Typography>FaceBook</Typography>
            <Typography>Whatsapp</Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
