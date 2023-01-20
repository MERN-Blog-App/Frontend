import {
  Box,
  Button,
  Divider,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { tokens } from "../../theme";

export default function BlogItem() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box display="grid" overflow="auto">
      <Box
        gridColumn="span 12"
        width="100%"
        p={3}
        my={3}
        backgroundColor={colors.main}
        borderRadius="15px"
        boxShadow={`1px 4px 4px 1px ${colors.primary}`}
      >
        <Box display="flex" justifyContent="space-between">
          <Box>
            <Box display="flex">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDAzXafoV2RDPvTnZ9jc11D_AM1Tla6vUIviA3HoyNQ48_5CaMrw91K4yr2n9T1d3-RQc&usqp=CAU"
                alt="person"
                style={{
                  marginRight: "10px",
                  borderRadius: "50%",
                  cursor: "pointer",
                }}
                width={25}
              />
              <Box>
                <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                  Lorem ipsum dolor sit amet.
                </Typography>
                <Typography variant="h6">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repudiandae, tempora?
                </Typography>
              </Box>
            </Box>
            <Divider />
            <Typography variant="h2" sx={{ mb: 2, fontWeight: "bold" }}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Obcaecati similique repellendus, aspernatur odit enim perferendis.
            </Typography>
            <Typography variant="h3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
              voluptatem est magni iste, maiores porro placeat quibusdam
              laboriosam reiciendis vero. Optio nisi quas tenetur tempora, est
              in modi molestiae deserunt ipsum voluptate excepturi illo beatae
              cumque repellendus veritatis rerum aspernatur at placeat vero
              sapiente. Adipisci delectus ea quisquam non fugiat!
            </Typography>
          </Box>
          <img
            style={{ width: 300, marginLeft: 3 }}
            src="https://img.freepik.com/free-vector/blogging-fun-content-creation-online-streaming-video-blog-young-girl-making-selfie-social-network-sharing-feedback-self-promotion-strategy-vector-isolated-concept-metaphor-illustration_335657-855.jpg?w=2000"
            alt="blog"
          />
        </Box>
        <Stack spacing={3} direction="row" mt={2}>
          <Button variant="contained" sx={{ color: colors.icons, fontWeight: "bold" }}>Read More</Button>
          <Button variant="contained" sx={{ color: colors.icons, fontWeight: "bold", }}>Share</Button>
        </Stack>
      </Box>
    </Box>
  );
}
