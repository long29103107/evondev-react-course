import React from "react";
import { NavLink } from "react-router-dom";

const NAV_LINKS = [
  {
    key: "home",
    label: "Home",
    to: "/",
  },
  {
    key: "movies",
    label: "Movies",
    to: "/movies",
  },
];

const Header = () => {
  return (
    <header className="header flex items-center justify-center gap-x-5 py-10 mb-5 text-white">
      {NAV_LINKS.length > 0 &&
        NAV_LINKS.map((link) => (
          <NavLink
            key={link.key}
            to={link.to}
            className={({ isActive }) =>
              isActive ? "text-primary" : "text-white"
            }
          >
            {link.label}
          </NavLink>
        ))}
    </header>
  );
};

export default Header;
