import "./Header.css";
import NavLink from "../Nav/NavLink";
import { Link } from "react-router-dom";

import Nav from "../Nav/Nav";

export default function Header() {
  const links = [
    {
      name: "About Me",
      path: "/",
    },
    {
      name: "Portfolio",
      path: "/Portfolio",
    },
    {
      name: "Contact",
      path: "/Contact",
    },
    // {
    //   name: "Resume",
    //   path: "/Resume",
    // },
  ];

  return (
    <header className="background">
      <Link to="/">
        <h1>Nathan Greeff</h1>
      </Link>
      <Nav
        links={links.map((link, index) => {
          return <NavLink key={index} name={link.name} path={link.path} />;
        })}
      />
    </header>
  );
}
