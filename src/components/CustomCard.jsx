import * as React from "react";
import Typography from "@mui/material/Typography";
import { Stack, Chip } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const CustomCard = ({ item }) => {
  const theme = useTheme();
  return (
    <Card sx={{ m: 2 }}>
      <CardMedia component="img" alt="image" height="200" image={item.icon} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.title}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ whiteSpace: "pre-line" }}
        >
          {item.subTitle}
        </Typography>
        <Stack direction="row" spacing={1} alignItems="center">
          <Chip
            label={item.level}
            color="success"
            variant="contained"
            sx={{ textTransform: "uppercase" }}
          />
          <Chip
            label={item.duration}
            color="success"
            variant="contained"
            sx={{ textTransform: "uppercase" }}
          />
        </Stack>
      </CardContent>
      <CardActions>
        <Button
          fullWidth
          variant="outlined"
          component={Link}
          to="/courses"
          onClick={() => {
            window.scroll({
              top: 0,
              left: 0,
              behavior: "smooth",
            });
          }}
          sx={{
            ":hover": {
              bgcolor: theme.palette.primary.main, // theme.palette.primary.main
              color: theme.palette.common.white,
            },
          }}
        >
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

export default CustomCard;
