import * as React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Stack } from "@mui/material";
import Container from "@mui/material/Container";
import { useTheme } from "@mui/material/styles";
import SimpleBreadcrumb from "../components/SimpleBreadcrumb";
import Appbar from "../components/Appbar";
import Offer from "../components/Offer";
import { aboutImage } from "../constant";

const About = () => {
  const theme = useTheme();
  return (
    <>
      <Box
        sx={{
          display: "flex",
          backgroundColor: theme.palette.common.white,
          backgroundImage: `url(${aboutImage})`,
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
                About
              </Typography>
              <SimpleBreadcrumb />
            </Stack>
          </Box>
        </Container>
      </Box>
      <Offer />
    </>
  );
};

export default About;
