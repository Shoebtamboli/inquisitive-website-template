import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { Link, NavLink } from "react-router-dom";
import { createStyles, makeStyles } from "@mui/styles";
import CompanyTitle from "./CompanyTitle";
import { contactData } from "../data";
import { useTheme } from "@mui/material/styles";
import {
  drawerWidth,
  navigationItems,
  companyTitle,
  companySubTitle,
  companyLogo,
} from "../constant";

const useStyles = makeStyles((theme) =>
  createStyles({
    activeLink: {
      color: "darkcyan",
      textDecoration: "underline",
      textDecorationThickness: 3,
    },
  })
);

const MyNavLink = React.forwardRef((props, ref) => (
  <NavLink
    ref={ref}
    to={props.to}
    className={({ isActive }) =>
      `${props.className} ${isActive ? props.activeClassName : ""}`
    }
  >
    {props.children}
  </NavLink>
));

function Appbar(props) {
  const theme = useTheme();
  const { window } = props;
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        sx={{ my: 2 }}
      >
        <Typography
          variant="h6"
          component="div"
          sx={{
            flexGrow: 1,
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".3rem",
            color: "inherit",
            textDecoration: "none",
          }}
        >
          {companyTitle}
        </Typography>
        <Typography
          variant="body2"
          component="div"
          sx={{
            flexGrow: 1,
            fontFamily: "monospace",
            color: "inherit",
          }}
        >
          {companySubTitle}
        </Typography>
      </Stack>
      <Divider />
      <List>
        {navigationItems.map((item, index) => (
          <Link
            to={item.url}
            key={index}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <ListItem key={index} disablePadding>
              <ListItemButton sx={{ textAlign: "center" }}>
                <ListItemText primary={item.name} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <AppBar
        component="nav"
        color="transparent"
        position="relative"
        sx={{
          boxShadow: "none",
        }}
      >
        <Toolbar sx={{ mb: 4, mt: 2 }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          {/* <img
            src={companyLogo}
            height="50"
            width="50"
            className="center bg-cover"
            alt="logo"
            sx={{ objectFit: "contain" }}
          /> */}
          <CompanyTitle />
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={2}
          >
            {contactData.map((item, index) => (
              <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={2}
                key={index}
              >
                <IconButton color="inherit" edge="start" size="large">
                  {item.icon}
                </IconButton>
                <Typography variant="body2">{item.text}</Typography>
              </Stack>
            ))}
          </Stack>
        </Toolbar>

        <Box
          component={Paper}
          sx={{
            display: { xs: "none", sm: "block", md: "flex" },
            bgcolor: theme.palette.grey[200],
            height: 50,
            borderRadius: 8,
            justifyContent: "space-around",
            alignItems: "center",
            //opacity: 0.5
          }}
        >
          {navigationItems.map((item, index) => (
            <Typography
              component={MyNavLink}
              activeClassName={classes.activeLink}
              to={item.url}
              key={index}
              variant="h6"
              sx={{
                color: "#000",
                textDecoration: "none",
                letterSpacing: "0.1rem",
              }}
            >
              {item.name}
            </Typography>
          ))}
        </Box>
      </AppBar>

      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </>
  );
}

export default Appbar;
