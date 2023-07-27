import * as React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const SimpleBreadcrumb = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const pathnames = pathname.split("/").filter(Boolean);
  return (
    <Breadcrumbs
      separator={<NavigateNextIcon fontSize="small" />}
      aria-label="breadcrumb"
      sx={{cursor: "pointer"}}
    >
      {pathnames.length ? (
        <Link
          underline="hover"
          color="inherit"
          onClick={() => navigate("/")}
          sx={{ textTransform: "uppercase"}}
        >
          Home
        </Link>
      ) : (
        <Typography sx={{ textTransform: "uppercase" }}> Home </Typography>
      )}
      {pathnames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
        const isLast = index === pathnames.length - 1;

        return isLast ? (
          <Typography key={name} sx={{ textTransform: "uppercase" }}>
            {name}
          </Typography>
        ) : (
          <Link
            key={name}
            onClick={() => navigate(routeTo)}
            sx={{ textTransform: "uppercase" }}
          >
            {name}
          </Link>
        );
      })}
    </Breadcrumbs>
  );
};

export default SimpleBreadcrumb;
