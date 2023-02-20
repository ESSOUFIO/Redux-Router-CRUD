import "bootstrap/dist/css/bootstrap.min.css";
import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

//** == Pages == */
import RootLayout from "./pages/RootLayout";
import PostList from "./components/Post/PostList";
// import PostDetails from "./pages/PostDetails";
// import PostEdit from "./pages/PostEdit";
// import ErrorPage from "./pages/ErrorPage";
// import AddPost from "./pages/AddPost";
// import Auth from "./pages/Auth";

const AboutUs = React.lazy(() => import("./pages/AboutUs"));
const ErrorPage = React.lazy(() => import("./pages/ErrorPage"));
const AddPost = React.lazy(() => import("./pages/AddPost"));
const PostDetails = React.lazy(() => import("./pages/PostDetails"));
const PostEdit = React.lazy(() => import("./pages/PostEdit"));
const Auth = React.lazy(() => import("./pages/Auth"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <PostList />,
      },
      {
        path: "post/add",

        element: (
          <Suspense>
            <AddPost />
          </Suspense>
        ),
        // element: (
        //   <GuardRouter>
        //     <AddPost />
        //   </GuardRouter>
        // ),
      },
      {
        path: "about-us",
        element: (
          <Suspense>
            <AboutUs />
          </Suspense>
        ),
      },
      {
        path: "auth",
        element: (
          <Suspense>
            <Auth />
          </Suspense>
        ),
      },
      {
        path: "post/:id/details",
        element: (
          <Suspense>
            <PostDetails />
          </Suspense>
        ),
      },
      {
        path: "post/:id/edit",
        element: (
          <Suspense>
            <PostEdit />
          </Suspense>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);

reportWebVitals();
