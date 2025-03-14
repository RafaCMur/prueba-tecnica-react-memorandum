import React from "react";
import "../styles/Header.css";

const Header = () => {
  return (
    <header className="header flex flex-row space-between align-center">
      <h1>Header</h1>
      <div className="flex flex-row space-between align-center gap-1">
        <span>Log in</span>
        <button className="trial-btn">Start your free trial</button>
      </div>
    </header>
  );
};

export default Header;
