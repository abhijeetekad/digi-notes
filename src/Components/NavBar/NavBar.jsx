import React from "react";
import "./NavBar.css";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { Link } from "react-router-dom";
import { useTheme } from "../../Contexts/Theme-context.jsx";
function NavBar() {
  const { theme, themeToggle } = useTheme();
  return (
    <div className="navbar">
      <div className="nav-header">
        <div className="nav-logo">
          <label>
            <MenuIcon />
          </label>
          <label style={{ display: "none" }}>
            <CloseIcon />
          </label>
          <Link className="link" to="/">
            <p>Digital Notes</p>
          </Link>
        </div>
        <div className="nav-icon">
          <div className="sc-nav-options">
            <button onClick={themeToggle}>
              {theme === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
            </button>
          </div>
          <div className="sc-nav-options">
            <p>Log in</p>
            <label>
              <MenuIcon />
            </label>
            <label style={{ display: "none" }}>
              <CloseIcon />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export { NavBar };