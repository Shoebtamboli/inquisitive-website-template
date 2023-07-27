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
    <Typography variant="body2" color="text.secondary" align="left">
      {"Copyright © "}
      <Link color="inherit" href={footerLink} rel="noopener" target="_blank">
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
        py: [3, 6],
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
              <Link
                color="inherit"
                href={media.url}
                rel="noopener"
                target="_blank"
              >
                <Button color="inherit" size="large" key={index}>
                  {media.icon}
                </Button>
              </Link>
            ))}
          </Grid>
          {footers.map((footer) => (
            <Grid item xs={4} key={footer.title}>
              <Typography variant="h6" color="text.primary" gutterBottom>
                {footer.title}
              </Typography>
              <ul>
                {footer.description.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.url}
                      variant="subtitle1"
                      color="text.secondary"
                      sx={{ textDecoration: "none" }}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </Grid>
          ))}
        </Grid>
        <Copyright />
      </Container>
    </Box>
  );
}
