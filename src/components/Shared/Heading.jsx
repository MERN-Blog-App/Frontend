import { Box, Typography } from "@mui/material";

export default function Heading(props) {
    return (
        <Box>
            <Typography variant="h2" sx={{ mb: 3}}>
                {props.title}
            </Typography>
        </Box>
    );
}