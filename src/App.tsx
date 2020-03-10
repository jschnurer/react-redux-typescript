import React, { Fragment } from 'react';
import './App.css';
import PostList from "./components/posts/PostList";
import ErrorsList from './components/errors/ErrorsList';

export default () => 
  <Fragment>
    <PostList />
    <ErrorsList />
  </Fragment>;