import React from "react";
import Header from "./Header";
import "./Layout.scoped.css";

const Layout: React.FC = (props) => 
  <>
    <Header />
    <div className="page">
      {props.children}
    </div>
  </>;

export default Layout;