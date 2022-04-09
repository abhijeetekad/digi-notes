import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
      HomePage
      <Link to="/mainpage">Go to main page</Link>
    </div>
  );
}

export { HomePage };
