import React, { useState } from "react";
import { Box } from "@mui/material";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const LineChartPage = () => {
  const [curveType, setcurveType] = useState("linear");
  return (
    <Box m="20px">
      <Header title="Line Chart of Clients" subtitle="Number of Clients we get a month per Country"></Header>
      <Box sx={{ minWidth: 120 }} mt="10px">
        <FormControl sx={{ width: 150 }}>
          <InputLabel sx={{ fontSize: 20 }} id="demo-simple-select-label">
            Curve type
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={curveType}
            label="Age"
            onChange={(event) => { setcurveType(event.target.value);}}
          >
            <MenuItem value={"linear"}>Linear</MenuItem>
            <MenuItem value={"basis"}>Basis</MenuItem>
            <MenuItem value={"catmullRom"}>CatmullRom</MenuItem>
			<MenuItem value={"monotoneX"}>MonotoneX</MenuItem>
			<MenuItem value={"monotoneY"}>MonotoneY</MenuItem>
			<MenuItem value={"natural"}>Natural</MenuItem>
			<MenuItem value={"step"}>Step</MenuItem>
			<MenuItem value={"stepAfter"}>StepAfter</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box height="75vh">
        <LineChart curveType={curveType} />
      </Box>
    </Box>
  );
};

export default LineChartPage;
