import React from 'react'
import { Box, Typography, useTheme } from "@mui/material";
import Header from "../../components/Header";
import PieChart from "../../components/PieChart";
const Pie = () => {
  return (
	<Box m="20px">
	<Header title="Pie Chart of Programming languages" subtitle="The most common languages used by the team"></Header>
	<Box height="75vh">
	  <PieChart></PieChart>
	</Box>
  </Box>
  )
}

export default Pie