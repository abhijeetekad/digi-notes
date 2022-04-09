import React from "react";
import { Link } from "react-router-dom";

function SideBarRight() {
  return (
    <div>
      <div>
        <Link to="/mainpage/archive">Archive</Link>
      </div>
      <div>
        <Link to="/mainpage/label">Label</Link>
      </div>
      <div>
        <Link to="/mainpage/trash">trash</Link>
      </div>
    </div>
  );
}

export { SideBarRight };
