import React from "react";
import "./Header.scoped.css";

const Header: React.FunctionComponent = () => 
  <div className="accent1-bg header">
    <div>
      <span className="title">React Redux Typescript Example</span>
      <span className="tagline accent5">"Just like mom used to make!"</span>
    </div>
  </div>;

export default Header;