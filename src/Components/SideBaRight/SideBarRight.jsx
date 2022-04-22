import { useTheme } from "@emotion/react";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useSidebar } from "../../Contexts/Sidebar-context";
import "./SideBarRight.css";
import NoteAltIcon from "@mui/icons-material/NoteAlt";
import ArchiveIcon from "@mui/icons-material/Archive";
import DeleteSweepIcon from "@mui/icons-material/DeleteSweep";
import DescriptionIcon from "@mui/icons-material/Description";

function SideBarRight() {
  const { theme } = useTheme();
  const { sidebarRight } = useSidebar();
  const getActiveLinkStatus = ({ isActive }) => {
    if (theme === "dark") {
      return {
        color: isActive ? "#74768F" : "#ffffff",
        textDecoration: "none",
      };
    } else {
      return {
        color: isActive ? "#74768F" : "black",
        textDecoration: "none",
      };
    }
  };
  return (
    <div>
      {sidebarRight && (
        <div className="sidebar-right">
          <div className="main-taks">
            <NavLink
              style={getActiveLinkStatus}
              className="link"
              to="/mainpage/archive"
            >
              <div className="sideBar-items">
                <ArchiveIcon />
                <span>Archive</span>
              </div>
            </NavLink>
          </div>
          <div className="main-taks">
            <NavLink
              style={getActiveLinkStatus}
              className="link"
              to="/mainpage/label"
            >
              <div className="sideBar-items">
                <DescriptionIcon />
                <span>Label</span>
              </div>
            </NavLink>
          </div>
          <div className="main-taks">
            <NavLink
              style={getActiveLinkStatus}
              className="link"
              to="/mainpage/trash"
            >
              <div className="sideBar-items">
                <DeleteSweepIcon />
                <span> Trash</span>
              </div>
            </NavLink>
          </div>
        </div>
      )}
    </div>
  );
}

export { SideBarRight };
