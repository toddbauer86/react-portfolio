import React from "react";

import Nav from "../Nav";

function Header({ setSelectedPage, selectedPage }) {
  return (
    <header className="flex-row px-1">
      <div className="logo">
        <h1
          onClick={() => {
            setSelectedPage("about");
          }}
        >
          hi, I'm Todd
        </h1>
      </div>
      <Nav selectedPage={selectedPage} setSelectedPage={setSelectedPage}></Nav>
    </header>
  );
}

export default Header;
