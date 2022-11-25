import React from "react";
import Header from "../../components/Header";
import { Box, useTheme, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataInvoices } from "../../data/mockData";



const Invocies = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const coloums = [
	{
	  field: "id",
	  headerName: "ID",
	},
	{
	  field: "name",
	  headerName: "Name",
	  flex: 1,
	  cellClassName: "name-column--cell",
	},
	{
	  field: "cost",
	  headerName: "Cost",
	  flex: 1,
	  renderCell: (params) => <Typography color={colors.greenAccent[500]}>R{params.row.cost}</Typography>,
	},
	{
	  field: "phone",
	  headerName: "Phone Number",
	  flex: 1,
	},
  
	{
	  field: "email",
	  headerName: "Email",
	  flex: 1,
	},
  
	{
	  field: "date",
	  headerName: "Date",
	  flex: 1,
	},
  ];
  return (
    <Box m="20px">
      <Header
        title="Invoice page"
        subtitle="Shows all the Invoices present"
      ></Header>
      <Box
        mt="40px"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        <DataGrid checkboxSelection rows={mockDataInvoices} columns={coloums} />
      </Box>
    </Box>
  );
};

export default Invocies;
