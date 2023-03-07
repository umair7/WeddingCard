import React from "react";
import NavLinks from "./NavLinks";

function Navbar() {
  const links = [
    { href: "#section_1", label: "Homepage" },
    { href: "#section_2", label: "Our Story" },
    { href: "#section_3", label: "The Wedding" },
    { href: "#section_4", label: "People" },
    { href: "#section_5", label: "Gallery" },
    { href: "#section_6", label: "Rsvp" },
    { href: "#section_7", label: "Contact Us" },
  ];

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
      <div class="col-lg-3 col-12 mx-auto">
                    <a href="index.html" class="navbar-brand mx-auto mx-lg-0">
                        <span>Bratt</span>
                        <i class="bi-heart brand-icon"></i>
                        <span>Jolie</span>
                    </a>
                </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <NavLinks links={links} />
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
