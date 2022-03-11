import AboutUs from "components/pages/aboutUs/AboutUs";
import ContactUs from "components/pages/contactUs/ContactUs";
import Post from "components/pages/post/Post";
import UsefulLinks from "components/pages/usefulLinks/UsefulLinks";
import { Route, Routes } from "react-router-dom";
import PostList from "../pages/postList/PostList";
import NotFound from "./NotFound";

export enum AppRoutes {
  PostList = "/",
  Post = "/post/:id",
  AboutUs = "/about",
  ContactUs = "/contact",
  UsefulLinks = "/links",
}

const Routing = () =>
  <Routes>
    <Route path={AppRoutes.PostList} element={<PostList />} />
    <Route path={AppRoutes.Post} element={<Post />} />
    <Route path={AppRoutes.AboutUs} element={<AboutUs />} />
    <Route path={AppRoutes.ContactUs} element={<ContactUs />} />
    <Route path={AppRoutes.UsefulLinks} element={<UsefulLinks />} />
    <Route path="*" element={<NotFound />} />
  </Routes>;

export default Routing;