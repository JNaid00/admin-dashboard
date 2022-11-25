import React from "react";
import Header from "../../components/Header";
import { Box , ypography} from "@mui/system";
const index = () => {
  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="Center">
        <Header
          title="Manage Team"
          subtitle="Welcome to Team Page"
        ></Header>
      </Box>
    </Box>
  );
};

export default index;
