import React, { useState, useRef } from "react";
import { Box, Button, InputBase, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import JoditEditor from "jodit-react";
import SendIcon from "@mui/icons-material/Send";
import VisibilityIcon from "@mui/icons-material/Visibility";

export default function CreateBlog(props) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const editor = useRef(null);
  const [content, setContent] = useState("");

  const config = {
    readonly: false, // all options from https://xdsoft.net/jodit/doc/,
    placeholder: props.placeholder || "Enter blog description",
  };

  return (
    <Box mx={35} my={6}>
      <Box display="flex" flexDirection="column" columnGap={2} flexWrap>
        <Box
          display="flex"
          justifyContent="space-between"
          columnGap={2}
          flexWrap
          backgroundColor={colors.main}
          mb={3}
          p={2}
          boxShadow={`1px 4px 4px 1px ${colors.primary}`}
          borderRadius={2}
        >
          <InputBase
            sx={{
              pl: 1,
              flex: 1,
            }}
            placeholder="Separate keywords with commas"
          />
          {/* Preview button */}
          <Button
            variant="outlined"
            sx={{ p: 1, color: colors.icons, borderWidth: 2, borderColor: colors.icons }}
          >
            <VisibilityIcon />
            <Typography variant="h5" sx={{ ml: 1, fontWeight: "bold" }}>
              Preview
            </Typography>
          </Button>
          {/* Publish button */}
          <Button
            variant="outlined"
            sx={{ p: 1, color: colors.icons, borderWidth: 2, borderColor: colors.icons }}
          >
            <SendIcon />
            <Typography variant="h5" sx={{ ml: 1, fontWeight: "bold" }}>
              Publish
            </Typography>
          </Button>
        </Box>
        <Box
          backgroundColor={colors.main}
          p={5}
          borderRadius="22px"
          boxShadow={`1px 4px 4px 1px ${colors.primary}`}
          sx={{
            ".jodit-wysiwyg": {
              backgroundColor: colors.main,
              height: "500px !important",
            },
          }}
        >
          <Box>
            <InputBase
              sx={{
                mb: 2,
                pl: 1,
                flex: 1,
                borderBottom: `1px solid ${colors.icons}`,
              }}
              fullWidth
              placeholder="Enter blog title"
              required
            />
          </Box>
          <JoditEditor
            ref={editor}
            value={content}
            config={config}
            tabIndex={1} // tabIndex of textarea
            onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
            onChange={(newContent) => {}}
          />
        </Box>
      </Box>
    </Box>
  );
}
