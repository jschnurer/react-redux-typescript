import React from "react";
import { Link } from "react-router-dom";

const Welcome: React.FC = () =>
  <>
    <h2>Welcome</h2>
    <p>
      This application is built using <a href="https://reactjs.org/">React</a> and uses <a href="https://redux.js.org/">Redux</a> with <a href="https://redux-saga.js.org/">Redux-Saga</a>. It also uses <a href="https://www.npmjs.com/package/craco-plugin-scoped-css">craco-scoped-css</a> for component-scoped styling. <a href="https://reacttraining.com/react-router/">React-router-dom</a> is used for client-side navigation. It uses <a href="https://jaredpalmer.com/formik">Formik</a> with <a href="https://github.com/jquense/yup">Yup</a> validation to handle forms.
    </p>
    <p>
      For a backend API, it uses <a href="my-json-server.typicode.com/">My JSON Server</a> for a fake datasource. It doesn't persist PUTs, POSTs, or DELETEs so you won't see any changes if you do those using the site.
    </p>
    <p>
      <Link to="/posts">View Blog Posts &gt;</Link>
    </p>
  </>;

export default Welcome;