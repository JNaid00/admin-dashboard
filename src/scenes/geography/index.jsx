import React from "react";
import { Box } from "@mui/material";
import Header from "../../components/Header";
import Map from "../../components/Map";
const GeoMap = ({ isDashboard = false }) => {
  return (
    <Box m="20px">
      <Box display="flex">
        <Header title="World Map" subtitle="Number of our customers in each Country"></Header>
      </Box>
	<Box height="75vh">
	<Map />
	</Box>
      
    </Box>
  );
};

export default GeoMap;
