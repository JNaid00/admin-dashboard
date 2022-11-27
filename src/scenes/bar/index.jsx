import { Box, Typography, useTheme } from "@mui/material";
import Header from "../../components/Header";
import Barchart from "../../components/Barchart";
const BAR = () => {
  return (
    <Box m="20px">
      <Header title="Bar chart of Professions" subtitle="Number of professions in a set of Countries"></Header>
      <Box height="75vh">
        <Barchart />
      </Box>
    </Box>
  );
};

export default BAR;
