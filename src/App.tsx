import React from 'react';
import './App.css';
import Login from './components/login/Login';
import PostList from "./components/posts/PostList";

export default () => 
  <React.Fragment>
    <Login />
    <PostList />
  </React.Fragment>;