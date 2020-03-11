import React from "react";
import { Link } from "react-router-dom";

const Welcome: React.FC = () =>
  <>
    <h2>Welcome</h2>
    <p>
      This application is built using React and uses Redux with Redux-Sagas.
      It also uses craco-scoped-css for component-scoped styling. React-router-dom
      is used for client-side navigation.
    </p>
    <p>
      <Link to="/posts">Post Listing</Link>
    </p>
  </>;

export default Welcome;