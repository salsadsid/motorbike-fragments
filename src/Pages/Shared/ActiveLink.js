import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

function ActiveLink({ children, to, ...props }) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });
  return (
    <div>   
      <Link
        style={{
          color: match ? "white" : "black",
          backgroundColor: match ? " #FCA311" : "",
          padding: "6px 8px",
          borderRadius: "3px",
        }}
        to={to}
        {...props}
      >
        {children}
      </Link>
    </div>
  );
}

export default ActiveLink;
