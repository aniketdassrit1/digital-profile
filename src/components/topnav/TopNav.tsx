import React from "react";
import { Link } from "react-router-dom";
import "./TopNav.scss";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const TopNav = () => {
  const drawerWidth = 240;
  const navItems = [
    {
      name: "Home",
      link: "/home",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Resume",
      link: "/resume",
    },
    {
      name: "Contact",
      link: "/contact",
    },
  ];
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Aniket Das
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton
              sx={{ textAlign: "center" }}
              component={Link}
              to={item.link}
            >
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  return (
    <Box>
      <AppBar component="nav">
        <Toolbar
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              display: { xs: "block" },
            }}
          >
            <Button
              size="large"
              sx={{ color: "#fff" }}
              component={Link}
              to="/home"
            >
              Aniket Das
            </Button>
          </Box>

          <Box
            sx={{
              display: { xs: "none", sm: "block" },
            }}
          >
            {navItems.map((item) => (
              <Button
                key={item.name}
                sx={{ color: "#fff" }}
                component={Link}
                to={item.link}
                className="ml-4"
              >
                {item.name}
              </Button>
            ))}
          </Box>

          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" }, alignItems: "right" }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Box component="nav">
        <Drawer
          anchor="right"
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
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
    </Box>
  );
};

export default TopNav;
