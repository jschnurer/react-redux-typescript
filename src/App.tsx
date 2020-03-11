import React from 'react';
import Routing from "./Routing";
import Layout from './components/layout/Layout';
import { BrowserRouter } from 'react-router-dom';

const App: React.FunctionComponent = () =>
  <BrowserRouter>
    <Layout>
      <Routing />
    </Layout>
  </BrowserRouter>;

export default App;