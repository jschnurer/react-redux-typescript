import React from 'react';
import './App.css';
import Routing from "./Routing";
import Layout from './components/layout/Layout';

export default () =>
  <Layout>
    <Routing />
  </Layout>;