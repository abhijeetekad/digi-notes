import { useTheme } from "@emotion/react";
import React from "react";
import { useSidebar } from "../../Contexts/Sidebar-context";
import "./SideBarLeft.css";
function SideBarLeft() {
  const { sidebarLeft } = useSidebar();
  const { theme, themeToggle } = useTheme();
  return (
    <div>
      {sidebarLeft && (
        <div className="sidebar-left ">
          <div>Filters</div>
          <div>Add new notes</div>
        </div>
      )}
    </div>
  );
}

export { SideBarLeft };
