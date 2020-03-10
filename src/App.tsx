import React from 'react';
import Routing from "./Routing";
import Layout from './components/layout/Layout';

const App: React.FunctionComponent = () =>
  <Layout>
    <Routing />
  </Layout>;

export default App;