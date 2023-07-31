import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MoreIcon from "@mui/icons-material/MoreVert";
import { useAuthContext } from "../contexts/AuthContext";
import { Link, NavLink, Navigate, useNavigate } from "react-router-dom";
import { Avatar, Button } from "@mui/material";
import LiveSearch from "./LiveSearch";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useSubscribeContext } from "../contexts/SubscribeContext";

const pages = [
  {
    title: "Menu",
    link: "/menu",
  },
];

const adminPages = [
  {
    title: "Add Place",
    link: "/add",
  },
];

export default function Navbar() {
  const { user, logout, isAdmin } = useAuthContext();
  const { cart } = useSubscribeContext();
  const navigate = useNavigate();

  function getPages() {
    if (isAdmin()) {
      return pages.concat(adminPages);
    } else {
      return pages;
    }
  }

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem
        onClick={() => {
          handleMenuClose();
          logout();
        }}
      >
        Logout
      </MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={99} color="error">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
        <p>Cart</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <LocalAtmIcon />
          </Badge>
        </IconButton>
        <p>Subs</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "#7C9D96" }}>
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Kayakta
          </Typography>
          <Typography
            variant="h6"
            noWrap
            // component={Link}
            // to="/"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            {/* City MAP */}
          </Typography>
          <Box sx={{ display: "flex", ml: 2 }}>
            {getPages().map((page) => (
              <Button
                component={NavLink}
                to={page.link}
                sx={{ my: 2, color: "white" }}
                key={page.title}
              >
                {page.title}
              </Button>
            ))}
          </Box>
          <LiveSearch />
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
            >
              <Badge badgeContent={cart.products.length} color="error">
                <ShoppingCartIcon onClick={() => navigate("/cart")} />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={3} color="error">
                <FavoriteIcon onClick={() => navigate("/favourite")} />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={3} color="error">
                <LocalAtmIcon onClick={() => navigate("/subscribe")} />
              </Badge>
            </IconButton>

            {!user ? (
              <Button component={Link} to="/auth" sx={{ color: "white" }}>
                Login
              </Button>
            ) : (
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <Avatar
                  sx={{ textTransform: "uppercase" }}
                  src={user.photoURL}
                  alt={user.displayName}
                >
                  {user.displayName && user.displayName.split(" ")[0][0]}
                  {user.displayName &&
                    user.displayName.includes(" ") &&
                    user.displayName.split(" ")[1][0]}
                </Avatar>
              </IconButton>
            )}
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
