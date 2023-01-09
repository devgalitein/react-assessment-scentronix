import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
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
import Link from "next/link";
import styles from "../styles/Navbar.module.css";
import { useRouter } from "next/router";
import Image from "next/image";

const drawerWidth = 240;
const navItems = [
  {
    id: "1",
    title: "SHOP",
    link: "/shop",
  },
  {
    id: "2",
    title: "RECIPES",
    link: "/recipes",
  },
  {
    id: "3",
    title: "LEARN",
    link: "/learn",
  },
  {
    id: "4",
    title: "ABOUT",
    link: "/about",
  },
  {
    id: "5",
    title: "BLOG",
    link: "/blog",
  },
];

const options = [
  {
    id: "1",
    title: "CATEGORIES",
  },
  {
    id: "2",
    title: "COLLECTIONS",
  },
  {
    id: "3",
    title: "RESOURCE",
  },
];

function Navbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const router = useRouter();

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography
        variant="h6"
        className={styles.navLink}
        sx={{ my: 2, color: "black" }}
      >
        Restaurant
      </Typography>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.id} disablePadding>
            <ListItemButton
              className={router.pathname == item.link ? styles.navActive : ""}
              sx={{ textAlign: "center", color: "black" }}
            >
              <Link className={styles.navLink} href={item.link}>
                {item.title}
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar sx={{ display: "flex" }}>
          <IconButton
            color="black"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            sx={{ flexGrow: 0, display: { xs: "none", sm: "block" } }}
          >
            <Image
              className={styles.logo}
              src="/logo.png"
              alt="Logo"
              object-fit="contain"
              width="75"
              height="89"
              priority
            />
          </Typography>

          <Box
            sx={{
              display: { xs: "none", sm: "block", color: "black" },
              marginLeft: "150px",
            }}
          >
            {navItems.map((item) => (
              <Button
                className={
                  router.pathname == item.link
                    ? `${styles.navActive} ${styles.navItems}`
                    : styles.navItems
                }
                key={item.id}
                sx={{ color: "#fff" }}
              >
                <Link className={styles.navLink} href={item.link}>
                  {item.title}
                </Link>
              </Button>
            ))}
          </Box>
        </Toolbar>
        <Toolbar sx={{ display: { xs: "none", sm: "flex" }, backgroundColor: "#80808052" }}>
          <Box sx={{ marginLeft: "150px" }}>
            {options.map((item) => (
              <Button
                className={styles.subNav}
                key={item.id}
                sx={{ color: "#000" }}
              >
                {item.title}
              </Button>
            ))}
          </Box>
        </Toolbar>
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
    </Box>
  );
}

export default Navbar;
