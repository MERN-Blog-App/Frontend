import { useState } from "react";
import { Box, IconButton, useTheme } from "@mui/material";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import {
  MenuOutlined,
  Close,
  HomeOutlined,
  PersonOutline,
  Settings,
  Help,
  Feedback,
  Create,
} from "@mui/icons-material";
import SidebarItem from "./SidebarItem";
import { tokens } from "../../theme";

export default function Sidebar() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [selected, setSelected] = useState("Home");

  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: colors.main
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important"
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
          color: `${colors.icons} !important`
        },
        "& .pro-inner-item:hover": {
          color: `${colors.primary} !important`,
        },
        "& .pro-menu-item.active": {
          color: `${colors.secondary} !important`,
        },
      }}
    >
      <ProSidebar
        collapsed={isCollapsed}
        style={{
          border: `1px solid ${colors.primary}`,
          position: "fixed",
          zIndex: 0,
          overflowX: "hidden"
        }}
      >
        <Menu iconShape="square">
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlined /> : undefined}
            style={{
              color: colors.primary,
            }}
          >
            {!isCollapsed && (
              <Box display="flex" justifyContent="start">
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  {!isCollapsed ? <Close /> : <MenuOutlined />}
                </IconButton>
              </Box>
            )}
          </MenuItem>
          <Box paddingLeft={isCollapsed ? undefined : "2%"}>
            <SidebarItem
              title="Home"
              to="/"
              icon={<HomeOutlined />}
              selected={selected}
              setSelected={setSelected}
            />
            <SidebarItem
              title="Create blog"
              to="/create-blogs"
              icon={<Create />}
              selected={selected}
              setSelected={setSelected}
            />
            <Box mt={40}>
              <SidebarItem
                title="Profile"
                to="/profile"
                icon={<PersonOutline />}
                selected={selected}
                setSelected={setSelected}
              />
              <SidebarItem
                title="Help"
                to="/help"
                icon={<Help />}
                selected={selected}
                setSelected={setSelected}
              />
              <SidebarItem
                title="Settings"
                to="/settings"
                icon={<Settings />}
                selected={selected}
                setSelected={setSelected}
              />
              <SidebarItem
                title="Feedback"
                to="/feedback"
                icon={<Feedback />}
                selected={selected}
                setSelected={setSelected}
              />
            </Box>
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
}
