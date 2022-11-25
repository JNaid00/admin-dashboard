import React from "react";
import Header from "../../components/Header";
import { Box, Typography, useTheme } from "@mui/material";
const index = () => {
  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="Center">
        <Header
          title="Dashboard"
          subtitle="Welcome to your dash board"
        ></Header>
      </Box>
    </Box>
  );
};

export default index;
