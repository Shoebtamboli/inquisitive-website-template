import * as React from "react";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { companyTitle, companySubTitle } from "../constant";

const CompanyTitle = () => {
  return (
    <Stack
      direction="column"
      justifyContent="flex-start"
      alignItems="flex-start"
      sx={{
        mr: 10,
        backgroundcolor: "primary",
        backgroundImage: `linear-gradient(to right, #3c3b3f, #605c3c)`,
        backgroundSize: "100%",
        backgroundRepeat: "repeat",
        backgroundClip: "text",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent"
      }}
    >
      <Typography
        variant="h4"
        component="div"
        sx={{
          flexGrow: 1,
          display: { xs: "none", sm: "block", md: "flex" },
          fontFamily: "monospace",
          fontWeight: 700,
          letterSpacing: ".3rem",
          color: "inherit",
          textDecoration: "none"
        }}
      >
        {companyTitle}
      </Typography>
      <Typography
        variant="body1"
        component="div"
        sx={{
          flexGrow: 1,
          display: { xs: "none", sm: "block", md: "flex" },
          fontFamily: "monospace",

          color: "inherit"
        }}
      >
        {companySubTitle}
      </Typography>
    </Stack>
  );
};

export default CompanyTitle;
