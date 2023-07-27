import * as React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Button, Stack, Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Appbar from "../components/Appbar";
import Learn from "../components/Learn";
import Courses from "../components/Courses";
import { Link } from "react-router-dom";
import { homeImage } from "../constant";

const Home = () => {
  const theme = useTheme();

  return (
    <>
      <Box
        sx={{
          display: "flex",
          backgroundColor: theme.palette.common.white,
          backgroundImage: `url(${homeImage})`,
          backgroundAttachment: "fixed",
        }}
      >
        <Container maxWidth="lg">
          <Appbar />
          <Box
            sx={{
              mt: 10,
              mb: 10,
            }}
          >
            <Grid
              container
              spacing={2}
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
              <Grid item xs={6}></Grid>
              <Grid item xs={6}>
                <Typography
                  variant="h6"
                  gutterBottom
                  // sx={{
                  //   background: "linear-gradient(to right, #430089, #82ffa1)",
                  //   WebkitBackgroundClip: "text",
                  //   WebkitTextFillColor: "transparent"
                  // }}
                >
                  WELCOME TO INQUISITIVE INSTITUTE
                </Typography>
                <Typography
                  variant="h3"
                  gutterBottom
                  // sx={{
                  //   background: "linear-gradient(to right, #430089, #82ffa1)",
                  //   WebkitBackgroundClip: "text",
                  //   WebkitTextFillColor: "transparent"
                  // }}
                >
                  Best IT Education Expertise
                </Typography>
                <Typography
                  variant="h6"
                  color="text.secondary"
                  gutterBottom
                  // sx={{
                  //   backgroundcolor: "primary",
                  //   backgroundImage: `linear-gradient(45deg, #5514B4, #FF80FF)`,
                  //   backgroundSize: "100%",
                  //   backgroundRepeat: "repeat",
                  //   backgroundClip: "text",
                  //   WebkitBackgroundClip: "text",
                  //   WebkitTextFillColor: "transparent"
                  // }}
                >
                  We are dedicated to empowering individuals and organizations
                  with the knowledge and skills needed to excel in the
                  ever-evolving world of information technology.
                </Typography>
                <Stack
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="center"
                  spacing={2}
                  sx={{ mt: 4 }}
                >
                  <Button component={Link} to="/courses" variant="contained">
                    View course
                  </Button>
                  <Button
                    component={Link}
                    to="contact"
                    variant="outlined"
                    sx={{
                      ":hover": {
                        bgcolor: theme.palette.primary.main, // theme.palette.primary.main
                        color: theme.palette.common.white,
                      },
                    }}
                  >
                    Contact now
                  </Button>
                </Stack>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
      <Learn />
      <Courses />
    </>
  );
};

export default Home;
