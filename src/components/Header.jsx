import React from "react";
import "../styles/Header.css";

const Header = () => {
  return (
    <header className="header flex flex-row justify-center align-center">
      <div className="header-content">
        <h1 className="header-title">Header</h1>
        <div className="flex flex-row space-between align-center gap-1">
          <span>Log in</span>
          <button className="trial-btn">Start your free trial</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
