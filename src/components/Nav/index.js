import React from "react";
import Portfolio from "../Portfolio";

function Nav({ setSelectedPage, selectedPage }) {
  return (
    <nav className="navbar">
      <ul className="flex-row">
        <li className="mx-2">
          <span
            className={selectedPage === "portfolio" ? "active-link" : ""}
            onClick={() => {
              setSelectedPage("portfolio");
            }}
          >
            portfolio
          </span>
        </li>
        <li className="mx-2">
          <span
            className={selectedPage === "contact" ? "active-link" : ""}
            onClick={() => {
              setSelectedPage("contact");
            }}
          >
            contact
          </span>
        </li>
        <li className="mx-2">
          <span
            className={selectedPage === "resume" ? "active-link" : ""}
            onClick={() => {
              setSelectedPage("resume");
            }}
          >
            resume
          </span>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
