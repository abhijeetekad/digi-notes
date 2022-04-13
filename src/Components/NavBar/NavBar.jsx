import React from "react";
import "./NavBar.css";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { Link, NavLink } from "react-router-dom";
import { useTheme } from "../../Contexts/Theme-context.jsx";
import { useAuth } from "../../Contexts/Auth-context";
import { useSidebar } from "../../Contexts/Sidebar-context";
function NavBar() {
  const { theme, themeToggle } = useTheme();
  const { auth, setAuth } = useAuth();
  const { sidebarLeft, sidebarRight, sidebarLeftToggle, sidebarRightToggle } =
    useSidebar();
  const logOutHandler = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("authToken");
    setAuth((auth) => ({
      ...auth,
      user: "",
      status: false,
      authToken: null,
    }));
  };
  return (
    <div className={`navbar ${theme === "dark" ? "dark-mode" : "light-theme"}`}>
      <div className="nav-header">
        <div className="nav-logo">
          <div onClick={sidebarLeftToggle}>
            {!sidebarLeft ? (
              <label>
                <MenuIcon />
              </label>
            ) : (
              <label>
                <CloseIcon />
              </label>
            )}
          </div>

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
            {auth.status && (
              <div className="userProfile">
                <p>Hi {auth.user}</p>
                <NavLink className="link" onClick={logOutHandler} to="/">
                  <p> Log out</p>
                </NavLink>
              </div>
            )}

            <div onClick={sidebarRightToggle}>
              {!sidebarRight ? (
                <label>
                  <MenuIcon />
                </label>
              ) : (
                <label>
                  <CloseIcon />
                </label>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { NavBar };
