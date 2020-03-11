import React from "react";
import "./Header.scoped.css";
import { Link, BrowserRouter } from "react-router-dom";

const taglines = [
  "Just like mom used to make!",
  "Now with 100% more Redux Sagas!",
  "What a great site!",
  "Fragile and untested!",
  "Push it straight to prod!"
];

const getRandomTagline = () => taglines[Math.floor(Math.random() * taglines.length)];

const Header: React.FunctionComponent = () =>
  <div className="accent1-bg header">
    <div>
      <Link to="/" className="title">React Redux Typescript Example</Link>
      <Link to="/" className="tagline">"{getRandomTagline()}"</Link>
    </div>
  </div>;

export default Header;