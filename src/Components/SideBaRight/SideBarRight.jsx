import React from "react";
import { Link } from "react-router-dom";
import "./SideBarRight.css";
function SideBarRight() {
  return (
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
  );
}

export { SideBarRight };
