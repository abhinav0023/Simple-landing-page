import React from "react";
import "./navbar.css";
function navbar() {
  return (
    <div className="header">
      <div className="header__Left">
        <h1 className="header__Name">Bigpath</h1>
      </div>
      <div className="header__Right">
        <h4>Signup</h4>
        <h4>Login</h4>
      </div>
    </div>
  );
}

export default navbar;
