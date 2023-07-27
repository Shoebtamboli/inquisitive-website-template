import * as React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { useTheme } from "@mui/material/styles";
import { courseList } from "../data";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CustomCard from "./CustomCard";

const Courses = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        backgroundColor: theme.palette.common.white
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            mt: 10,
            mb: 6
          }}
        >
          <Typography variant="h6" align="center" gutterBottom>
            OUR COURSES
          </Typography>
          <Typography variant="h3" align="center" gutterBottom>
            Explore Our Popular Courses
          </Typography>

          <Carousel
            additionalTransfrom={0}
            arrows={false}
            autoPlay
            autoPlaySpeed={3000}
            centerMode={false}
            className=""
            containerClass="container-with-dots"
            dotListClass=""
            draggable
            focusOnSelect={false}
            infinite
            itemClass=""
            keyBoardControl
            minimumTouchDrag={80}
            pauseOnHover
            renderArrowsWhenDisabled={false}
            renderButtonGroupOutside={false}
            renderDotsOutside={false}
            responsive={{
              desktop: {
                breakpoint: {
                  max: 3000,
                  min: 1024
                },
                items: 3,
                partialVisibilityGutter: 40
              },
              mobile: {
                breakpoint: {
                  max: 464,
                  min: 0
                },
                items: 1,
                partialVisibilityGutter: 30
              },
              tablet: {
                breakpoint: {
                  max: 1024,
                  min: 464
                },
                items: 2,
                partialVisibilityGutter: 30
              }
            }}
            rewind={false}
            rewindWithAnimation={false}
            rtl={false}
            shouldResetAutoplay
            showDots={true}
            sliderClass=""
            slidesToSlide={2}
            swipeable
          >
            {courseList?.map((item, index) => (
              <CustomCard item={item} key={index} />
            ))}
          </Carousel>

          {/* <Grid
            container
            spacing={4}
            justifyContent="center"
            alignItems="center"
            sx={{
              mt: 4
            }}
          >
            {courseList?.map((item, index) => (
              <Grid item key={index} xs={12} sm={6} md={4}>
                <CustomCard item={item} key={index} />
              </Grid>
            ))}
          </Grid> */}
        </Box>
      </Container>
    </Box>
  );
};

export default Courses;
