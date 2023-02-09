import React from "react";
import NewReleasesIcon from "@mui/icons-material/NewReleases";
import Container from "@mui/material/Container";

function Error({ errorMessage }) {
  return (
    <Container
      maxWidth={false}
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <NewReleasesIcon sx={{ fontSize: "80px", fill: "red" }}></NewReleasesIcon>
      <h1>{errorMessage}</h1>
    </Container>
  );
}

export default Error;
