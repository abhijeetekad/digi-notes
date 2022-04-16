import React from "react";
import { Link } from "react-router-dom";
import { useSidebar } from "../../Contexts/Sidebar-context";
import "./SideBarRight.css";
function SideBarRight() {
  const { sidebarRight } = useSidebar();
  return (
    <div>
      {sidebarRight && (
        <div className="sidebar-right">
          <div>
            <Link className="link" to="/mainpage/archive">
              Archive
            </Link>
          </div>
          <div>
            <Link className="link" to="/mainpage/label">
              Label
            </Link>
          </div>
          <div>
            <Link className="link" to="/mainpage/trash">
              trash
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export { SideBarRight };
