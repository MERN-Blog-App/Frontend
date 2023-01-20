import { useState, useEffect } from "react";
import { Box, IconButton, useTheme } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";
import data from "../../data.json";

import DisplayBlogItem from "./DisplayBlogItem";
import BlogItem from "./BlogItem";

export default function Blogs() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [count, setCount] = useState(0);
  const [showButton, setShowButton] = useState(false);
  const isMobile = useMediaQuery("(max-width: 600px)");

  useEffect(() => {
    const handleScrollButtonVisibility = () => {
      window.pageYOffset > 300 ? setShowButton(true) : setShowButton(false);
    };

    window.addEventListener("scroll", handleScrollButtonVisibility);

    return () => {
      window.removeEventListener("scroll", handleScrollButtonVisibility);
    };
  }, []);

  const handlePreviousInfo = () => {
    setCount(count - 1);
    console.log(count);
  };

  const handleNextInfo = () => {
    setCount(count + 1);
    console.log(count);
  };

  const nextSlide = setInterval(() => {
    if (count + 1 === data.objects.length) {
      clearInterval(nextSlide);
    } else {
      handleNextInfo();
    }
  }, 10000);

  const handleScrollToTop = () => {
    console.log('click')
    window.scrollTo({
      top: 0,
      behaviour: 'smooth'
    })
  }

  return (
    <Box mx={isMobile ? 2 : 35} my={isMobile ? 2 : 6}>
      <Box display="flex" columnGap={3}>
        <Box
          display="flex"
          backgroundColor={colors.main}
          width="100%"
          p={4}
          borderRadius="28px"
          boxShadow={`1px 4px 4px 1px ${colors.primary}`}
        >
          <DisplayBlogItem
            isMobile={isMobile}
            title={data.objects[count].blogTitle}
            description={data.objects[count].blogDescription}
          />
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="space-around"
          alignItems="center"
        >
          <IconButton
            onClick={handlePreviousInfo}
            disabled={count === 0 ? true : false}
          >
            <ExpandLessIcon />
          </IconButton>
          <Box>
            {count + 1}/{data.objects.length}
          </Box>
          <IconButton
            onClick={handleNextInfo}
            disabled={count + 1 === data.objects.length ? true : false}
          >
            <ExpandMoreIcon />
          </IconButton>
        </Box>
      </Box>
      <Box>
        <BlogItem />
        <BlogItem />
        <BlogItem />
        <BlogItem />
        <BlogItem />
        <BlogItem />
        <BlogItem />
        <BlogItem />
        <BlogItem />
        <BlogItem />
        <BlogItem />
        <BlogItem />
        <BlogItem />
        <BlogItem />
        <BlogItem />
        <BlogItem />
        <BlogItem />
        <BlogItem />
        <BlogItem />
        <BlogItem />
        <BlogItem />
        <BlogItem />
        <BlogItem />
      </Box>
      {showButton && (
        <Box>
          <IconButton
            sx={{
              backgroundColor: `${colors.main}`,
              opacity: 0.8,
              position: "fixed",
              right: 50,
              bottom: 100,
              borderRadius: "50%",
            }}

            onClick={handleScrollToTop}
          >
            <ExpandLessIcon />
          </IconButton>
        </Box>
      )}
    </Box>
  );
}
