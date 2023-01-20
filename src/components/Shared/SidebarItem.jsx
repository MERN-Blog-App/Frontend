import { Typography, useTheme } from "@mui/material";
import { MenuItem } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import { tokens } from "../../theme";

export default function SidebarItem(props) {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <MenuItem
            active={props.selected === props.title}
            style={{ color: colors.primary }}
            onClick={() => props.setSelected(props.title)}   
            icon={props.icon}
        >
            <Typography>{props.title}</Typography>
            <Link to={props.to} />
        </MenuItem>
    );
};