import { useContext } from "react";
import {
  Box,
  Typography,
  IconButton,
  useTheme,
  InputBase,
} from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import {
  DarkModeOutlined,
  LightModeOutlined,
  Search,
} from "@mui/icons-material";
import { ColorModeContext, tokens } from "../../theme";

export default function Navbar() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  const isMobile = useMediaQuery("(max-width: 600px)");

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      backgroundColor={`${colors.main}`}
      boxShadow={`0 4px 4px 0 ${colors.primary}`}
      p={2}
      px={5}
      position="fixed"
      top={0}
      width="100%"
      zIndex={1}
    >
      <Box display="flex" alignItems="center">
        <Typography sx={{ fontWeight: "bold" }}>Open Source Dev</Typography>
      </Box>
      <Box display="flex">
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "light" ? (
            <LightModeOutlined />
          ) : (
            <DarkModeOutlined />
          )}
        </IconButton>
        <Box
          display={isMobile && "none"}
          backgroundColor={colors.primary}
          borderRadius="5px"
          ml={2}
        >
          <InputBase sx={{ ml: 2 }} placeholder="Search" />
          <IconButton type="button">
            <Search />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
}
