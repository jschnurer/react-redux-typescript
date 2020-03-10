import React from "react";
import "./Header.scoped.css";

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
      <span className="title">React Redux Typescript Example</span>
      <span className="tagline accent5">"{getRandomTagline()}"</span>
    </div>
  </div>;

export default Header;