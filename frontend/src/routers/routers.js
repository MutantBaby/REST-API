import { createBrowserRouter } from "react-router-dom";

import Main from "../pages/Main/Main";
import ErrorPage from "../components/error/ErrorPage";
import Auth from "../pages/UserAuth/Auth";
import Timeline from "../pages/Timeline/Timeline";
import MainUpdate from "../pages/Main/MainUpdate";
import { NewPost } from "../pages/Posts/NewPost";
import AllPosts from "../pages/Posts/AllPosts";
import CheckPost from "../pages/Posts/CRUD Post/CheckPost";
import DeletePost from "../pages/Posts/CRUD Post/DeletePost";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Auth />
  },
  {
    path: "/:id",
    element: <Main />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/:id/update",
    element: <MainUpdate />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/posts/:id/upload",
    element: <NewPost />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/posts/:id/timeline",
    element: <Timeline />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/allposts/:id",
    element: <AllPosts />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/check-post/:id",
    element: <CheckPost />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/delete-post/:id",
    element: <DeletePost />,
    errorElement: <ErrorPage />,
  },
]);

export default router;