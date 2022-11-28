import { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import { tokens } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <MenuItem
      onClick={() => setSelected(title)}
      active={selected === title}
      style={{ color: colors.grey[100] }}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to}></Link>
    </MenuItem>
  );
};

const dataList = [
  {
    title: "Manage Team",
    to: "/team",
    icon: <PeopleOutlinedIcon />,
	id: "Manage_Team",
  },
  {
    title: "Contacts Information",
    to: "/contacts",
    icon: <ContactsOutlinedIcon />,
	id: "Contacts_Information",
  },
  {
    title: "Invoices Balances",
    to: "/invoices",
    icon: <ReceiptOutlinedIcon />,
	id: "Invoices_Balances",
  },
];

const pagesList = [
  {
    title: "Profile Form",
    to: "/form",
    icon: <PersonOutlinedIcon />,
	id: "Profile_Form",
  },
  {
    title: "Calendar",
    to: "/calendar",
    icon: <CalendarTodayOutlinedIcon />,
	id: "Calendar",
  },
  {
    title: "FAQ Page",
    to: "/faq",
    icon: <HelpOutlineOutlinedIcon />,
	id: "FAQ_Page",
  },
];

const chartList = [
  {
    title: "Bar Chart",
    to: "/bar",
    icon: <BarChartOutlinedIcon />,
	id: "Bar_Chart",
  },
  {
    title: "Pie Chart",
    to: "/pie",
    icon: <PieChartOutlineOutlinedIcon />,
	id: "Pie_Chart",
  },
  {
    title: "Line Chart",
    to: "/line",
    icon: <TimelineOutlinedIcon />,
	id: "Line_Chart",
  },
  {
    title: "Geography Chart",
    to: "/geography",
    icon: <MapOutlinedIcon />,
	id: "Geography_Chart",
  },
];
const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");
  return (
    <Box
		// position="fixed"
		height="100%"
		zIndex="1"
		top="0"
		left="0"
		
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colors.primary[400]} !important`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#868dfb !important",
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important",
        },
      }}
    >
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            xs={{
              margin: "10px 0 20 px 0",
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h3" color={colors.grey[100]}>
                  ADMINS
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {!isCollapsed && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <img
                  src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg"
                  alt="profile"
                  width="100px"
                  height="100px"
                  style={{ cursor: "pointer", borderRadius: "50%" }}
                />
              </Box>
              <Box textAlign="center">
                <Typography
                  variant="h2"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  sx={{
                    mt: "10px",
                  }}
                >
                  Jesse Naidoo
                </Typography>
                <Typography variant="h5" color={colors.greenAccent[500]}>
                  CEO
                </Typography>
              </Box>
            </Box>
          )}

          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            <Item
              title="Dashboard"
              to="/"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
			  
            />
            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Data
            </Typography>
            {dataList.map((item) => (
              <Item
                title={item.title}
                to={item.to}
                icon={item.icon}
                selected={selected}
                setSelected={setSelected}
				key={item.id}
              />
            ))}
            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Pages
            </Typography>
            {pagesList.map((item) => (
              <Item
                title={item.title}
                to={item.to}
                icon={item.icon}
                selected={selected}
                setSelected={setSelected}
				key={item.id}
              />
            ))}
            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Charts
            </Typography>
            {chartList.map((item) => (
              <Item
                title={item.title}
                to={item.to}
                icon={item.icon}
                selected={selected}
                setSelected={setSelected}
				key={item.id}
              />
            ))}
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;
