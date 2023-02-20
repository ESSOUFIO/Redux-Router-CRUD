import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

//** == Pages == */
import PostDetails from "./pages/PostDetails";
import PostEdit from "./pages/PostEdit";
import RootLayout from "./pages/RootLayout";
import ErrorPage from "./pages/ErrorPage";
import AddPost from "./pages/AddPost";
import AboutUs from "./pages/AboutUs";
import Auth from "./pages/Auth";
import PostList from "./components/Post/PostList";
import GuardRouter from "./utils/GuardRouter";

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
        element: <AddPost />,
        // element: (
        //   <GuardRouter>
        //     <AddPost />
        //   </GuardRouter>
        // ),
      },
      {
        path: "about-us",
        element: <AboutUs />,
      },
      {
        path: "auth",
        element: <Auth />,
      },
      {
        path: "post/:id/details",
        element: <PostDetails />,
      },
      {
        path: "post/:id/edit",
        element: <PostEdit />,
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
