import * as React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Stack, Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { learnInfo } from "../data";
import { learnImage } from "../constant";

const Learn = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        backgroundColor: "white"
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            mt: 10,
            mb: 4
          }}
        >
          <Grid
            container
            spacing={4}
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Grid
              item
              xs={6}
              component="img"
              alt="The house from the offer."
              src={learnImage}
              sx={{
                height: 700,
                width: 350
              }}
            ></Grid>
            <Grid item xs={6}>
              <Typography variant="h6" gutterBottom>
                LEARN ANYTHING
              </Typography>
              <Typography variant="h3" gutterBottom>
                Benefits About Online Learning Expertise
              </Typography>

              <Stack
                direction="column"
                justifyContent="flex-start"
                alignItems="center"
                spacing={2}
                sx={{
                  mt: 4
                }}
              >
                {learnInfo.map((item, index) => (
                  <Card
                    kex={index}
                    sx={{
                      display: "flex",
                      "&:hover": {
                        backgroundColor: theme.palette.grey[300]
                      }
                    }}
                  >
                    <CardMedia
                      component="img"
                      sx={{ width: 151, height: 120, mt: 2 }}
                      image={item.icon}
                      alt="education"
                    />

                    <CardContent>
                      <Typography component="div" variant="h5">
                        {item.title}
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        color="text.secondary"
                        component="div"
                      >
                        {item.subTitle}
                      </Typography>
                    </CardContent>
                  </Card>
                ))}
              </Stack>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Learn;
