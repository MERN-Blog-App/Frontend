import { Box, Typography } from "@mui/material";

export default function DisplayBlogItem(props) {
    return (
        <Box p={props.isMobile ? 0 : 2}>
            <Typography variant="h2" sx={{ fontWeight: "bold"}} mb={2}>
                {props.title}
            </Typography>
            <Typography variant="h4">
                {props.description}
            </Typography>
        </Box>
    );
}