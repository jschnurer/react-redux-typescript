import { Link } from "react-router-dom";
import { AppRoutes } from "./Routing";

const NotFound = () =>
  <>
    <h2>Page Not Found</h2>
    <p>The requested page doesn't exist.</p>
    <p><Link to={AppRoutes.PostList}>Go to the post list</Link></p>
  </>;

export default NotFound;