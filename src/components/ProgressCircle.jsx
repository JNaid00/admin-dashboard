import React from "react";
import { Box, useTheme } from "@mui/material";
import { tokens } from "../theme";
const ProgressCircle = ({ progress = "0.75", size = "40" }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const a = progress * 360;
  return (
    <Box
      sx={{
        background: `radial-gradient(${colors.primary[400]} 55%, transparent 56%),
		conic-gradient(transparent 0deg ${a}deg, ${colors.blueAccent[500]} ${a}deg 360deg),
		${colors.greenAccent[500]}`,
        borderRadius: "50%",
        width: `${size}px`,
        height: `${size}px`,
      }}
    />
  );
};

export default ProgressCircle;
