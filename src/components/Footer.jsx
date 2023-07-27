import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import { Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import CompanyTitle from "./CompanyTitle";
import { footers, socialMediaList } from "../data";
import { companySubText, footerName, footerLink } from "../constant";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href={footerLink}>
        {footerName}
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function Footer() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        bgcolor: theme.palette.common.white,
        borderTop: `1px solid ${theme.palette.divider}`,
        py: [3, 6]
      }}
    >
      <Container maxWidth="lg" component="footer">
        <Grid container spacing={2} justifyContent="flex-start">
          <Grid item xs={4} align="left">
            <CompanyTitle />

            <Typography variant="body2" color="text.secondary" gutterBottom>
              {companySubText}
            </Typography>

            {socialMediaList.map((media, index) => (
              <Button color="inherit" size="large" key={index}>
                {media}
              </Button>
            ))}
          </Grid>
          {footers.map((footer) => (
            <Grid item xs={4} key={footer.title}>
              <Typography variant="h6" color="text.primary" gutterBottom>
                {footer.title}
              </Typography>
              <ul>
                {footer.description.map((item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      variant="subtitle1"
                      color="text.secondary"
                      sx={{ textDecoration: "none" }}
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </Grid>
          ))}
        </Grid>
        <Copyright sx={{ mt: 10 }} />
      </Container>
    </Box>
  );
}
