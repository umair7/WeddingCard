import React from "react";

function NavLinks(props) {
  return (
    <>
      {props.links.map((link) => (
        <li className="nav-item" key={link.label}>
          <a className="nav-link click-scroll" href={link.href}>
            {link.label}
          </a>
        </li>
      ))}
    </>
  );
}

export default NavLinks;
