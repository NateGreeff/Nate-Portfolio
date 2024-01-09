import "./Nav.css";
import { useState, useEffect } from "react";
import { ClickAwayListener } from "@mui/material";
import { useLocation } from "react-router-dom";

export default function Nav({ links }) {
  const [showMenu, setShowMenu] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setShowMenu(false);
  }, [location]);

  if (window.innerWidth > 900) {
    return (
      <nav>
        <ul>{links.map((link) => link)}</ul>
      </nav>
    );
  } else {
    return (
      <ClickAwayListener onClickAway={() => setShowMenu(false)}>
        <nav>
          <div
            className={`hamburger ${showMenu ? "open" : ""}`}
            onClick={() => setShowMenu(!showMenu)}
          >
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
          <ul className={showMenu ? "show" : ""}>
            {links.map((link) => link)}
          </ul>
        </nav>
      </ClickAwayListener>
    );
  }
}
