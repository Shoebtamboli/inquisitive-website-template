import * as React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardActionArea from "@mui/material/CardActionArea";
import { useTheme } from "@mui/material/styles";
import SimpleBreadcrumb from "../components/SimpleBreadcrumb";
import Appbar from "../components/Appbar";
import { Chip } from "@mui/material";
import { courseList } from "../data";
import { coursesImage } from "../constant";

const Courses = () => {
  const theme = useTheme();
  return (
    <>
      <Box
        sx={{
          display: "flex",
          backgroundColor: theme.palette.common.white,
          backgroundImage: `url(${coursesImage})`,
          backgroundAttachment: "fixed"
        }}
      >
        <Container maxWidth="lg">
          <Appbar />
          <Box
            sx={{
              mt: 10,
              mb: 10
            }}
          >
            <Stack
              direction="column"
              justifyContent="flex-start"
              alignItems="center"
              spacing={2}
            >
              <Typography variant="h2" align="center">
                Courses
              </Typography>
              <SimpleBreadcrumb />
            </Stack>
          </Box>
        </Container>
      </Box>
      <Box
        sx={{
          display: "flex",
          backgroundColor: "white"
        }}
      >
        <Container maxWidth="md">
          <Box
            sx={{
              mt: 10,
              mb: 4
            }}
          >
            <Typography variant="h3" align="center" gutterBottom>
              Explore Our Popular Courses
            </Typography>

            <Grid
              container
              spacing={4}
              justifyContent="center"
              alignItems="center"
              sx={{
                mt: 6
              }}
            >
              {courseList?.map((item, index) => (
                <Grid item xs={12} key={index}>
                  {/* <Link to={`/${post.id}`} style={{ textDecoration: "none" }}> */}
                  <CardActionArea>
                    <Card sx={{ display: "flex", height: "50%" }}>
                      <CardMedia
                        component="img"
                        sx={{
                          width: 380,
                          height: 250,
                          display: { xs: "none", sm: "block" }
                        }}
                        image={item.icon}
                        alt="image text"
                      />
                      <CardContent sx={{ flex: 1 }}>
                        <Typography gutterBottom variant="h5" component="div">
                          {item.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          paragraph
                        >
                          {item.desciption}
                        </Typography>

                        <Stack
                          direction="column"
                          spacing={1}
                          sx={{ textTransform: "uppercase" }}
                        >
                          <Stack
                            direction="row"
                            spacing={2}
                            justifyContent="space-between"
                            alignItems="center"
                          >
                            <Typography variant="body1">Level</Typography>
                            <Chip
                              label={item.level}
                              color="success"
                              variant="outlined"
                            />
                          </Stack>
                          <Stack
                            direction="row"
                            spacing={2}
                            justifyContent="space-between"
                            alignItems="center"
                          >
                            <Typography variant="body1">Duration</Typography>
                            <Chip
                              label={item.duration}
                              color="success"
                              variant="outlined"
                            />
                          </Stack>
                        </Stack>
                      </CardContent>
                    </Card>
                  </CardActionArea>
                  {/* </Link> */}
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Courses;
