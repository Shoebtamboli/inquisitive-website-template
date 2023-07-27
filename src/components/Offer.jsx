import * as React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { offerList } from "../data";

const Offer = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        backgroundColor: "white",
        mb: 6,
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="h6" paragraph sx={{ mt: 4 }}>
          Welcome to Inquisitve IT training institute, the leading IT education
          expert in the industry. We are dedicated to empowering individuals and
          organizations with the knowledge and skills needed to excel in the
          ever-evolving world of information technology.
        </Typography>
        <Typography variant="h6" paragraph>
          At Inquisitve, we understand the critical role that IT plays in
          today's digital landscape. Our team of highly qualified experts brings
          a wealth of experience and a passion for technology, ensuring that our
          students receive the best IT education available.
        </Typography>
        <Typography variant="h6" paragraph>
          We offer a comprehensive range of courses and programs tailored to
          meet the needs of both beginners and experienced professionals.
          Whether you are looking to start a career in IT, upgrade your existing
          skills, or enhance your organization's technical capabilities, we have
          the perfect solution for you. What sets us apart is our commitment to
          delivering cutting-edge, industry-relevant content.
        </Typography>
        <Typography variant="h6" paragraph>
          Our curriculum is carefully crafted to cover the latest trends,
          technologies, and best practices. We collaborate with top IT
          professionals and industry leaders to ensure that our students gain
          practical insights and knowledge that can be immediately applied in
          real-world scenarios.
        </Typography>
        <Typography variant="h6" paragraph>
          Furthermore, we understand that every student is unique, with
          different learning styles and goals. That's why we offer flexible
          learning options to accommodate diverse preferences. Whether you
          prefer instructor-led classroom sessions, virtual online classes, or
          self-paced learning, we have the right format for you.
        </Typography>

        <Typography variant="h6" paragraph sx={{ mb: 4 }}>
          At Inquisitve, our success is measured by the success of our students.
          Join us today and embark on a learning journey that will equip you
          with the skills and knowledge to thrive in the dynamic world of
          information technology.
        </Typography>
        <Typography variant="h4" align="center" gutterBottom sx={{ mb: 8 }}>
          WHAT WE OFFER
        </Typography>
        <Grid container spacing={4} justifyContent="center" alignItems="center">
          {offerList.map((item, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <Card
                kex={index}
                sx={{
                  display: "flex",
                  "&:hover": {
                    backgroundColor: theme.palette.grey[300],
                  },
                }}
              >
                <CardMedia
                  component="img"
                  sx={{ width: 251, height: 180, m: 2 }}
                  image={item.icon}
                  alt="education"
                />
                <CardContent>
                  <Typography component="div" variant="h5" align="center">
                    {item.title}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Offer;
