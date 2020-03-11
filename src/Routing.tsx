import React from "react";
import {
  Switch,
  Route
} from "react-router-dom";
import PostList from "./components/posts/PostList";
import ErrorsList from './components/errors/ErrorsList';
import Welcome from "./components/welcome/Welcome";
import Post from "./components/posts/Post";
import User from "./components/users/User";

const Routing: React.FunctionComponent = () =>
  <>
    <Switch>
      <Route path="/posts/:id" component={Post} />
      <Route path="/posts">
        <PostList />
      </Route>
      <Route path="/users/:id" component={User} />
      <Route>
        <Welcome />
      </Route>
    </Switch>
    <ErrorsList />
  </>;

export default Routing;