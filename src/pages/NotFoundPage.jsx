import React from "react";
import { Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <Box sx={{ textAlign: "center", paddingTop: "100px" }}>
      <Typography variant="h3" gutterBottom>
        404 - Page Not Found
      </Typography>
      <Typography variant="body1" gutterBottom>
        Oops! The page you are looking for does not exist.
      </Typography>
      <Box sx={{ marginTop: "24px" }}>
        <Button variant="contained" component={Link} to="/" color="primary">
          Go to Home Page
        </Button>
      </Box>
    </Box>
  );
};

export default NotFoundPage;
