import React from "react";
import { HashLink as Link } from "react-router-hash-link";

function NotFound(props) {
  return (
    <div>
      page not Not found
      <Link to="/portfolio">Go home</Link>
    </div>
  );
}

export default NotFound;
