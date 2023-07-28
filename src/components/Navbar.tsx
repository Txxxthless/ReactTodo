import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <header className="p-3 px-4 mb-3 bg-white border-bottom fixed-top shadow-sm">
      <nav
        className="my-2 text-uppercase fs-4 d-flex justify-content-center"
        style={{ marginLeft: "30%", marginRight: "30%" }}
      >
        <Link to="/" className="p-2">
          Active
        </Link>
        <Link to="/archived" className="p-2">
          Archived
        </Link>
      </nav>
    </header>
  );
};
