import React, { Fragment } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import PostList from "./components/posts/PostList";
import ErrorsList from './components/errors/ErrorsList';
import Welcome from "./components/welcome/Welcome";
import Post from "./components/posts/Post";

const Routing: React.FunctionComponent = () =>
  <Fragment>
    <Router>
      <Switch>
        <Route path="/posts/:id" component={Post} />
        <Route path="/posts">
          <PostList />
        </Route>
        <Route>
          <Welcome />
        </Route>
      </Switch>
    </Router>
    <ErrorsList />
  </Fragment>;

export default Routing;