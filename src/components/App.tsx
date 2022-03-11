import logo from '../logo.svg';
import './App.scoped.scss';
import { BrowserRouter as Router, Link, } from "react-router-dom";
import Routing, { AppRoutes } from './routing/Routing';

function App() {
  return (
    <Router>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <Link to={AppRoutes.PostList} className="App-title">
          React + Redux + Saga + Typescript
        </Link>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div className="site-body">
        <Routing />
      </div>
      <footer>
        <Link to={AppRoutes.PostList}>Post List</Link> •
        <Link to={AppRoutes.AboutUs}>About Us</Link> •
        <Link to={AppRoutes.ContactUs}>Contact Us</Link> •
        <Link to={AppRoutes.UsefulLinks}>Useful Links</Link>
      </footer>
    </Router>
  );
}

export default App;
