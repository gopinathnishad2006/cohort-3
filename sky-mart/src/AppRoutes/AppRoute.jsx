import React from "react";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Mainlayout from "../Layout/Mainlayout";
import AuthLayout from "../Layout/AuthLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import About from "../pages/About";
import Navbar from "../components/Navbar";
import ProtectedRoute from "./ProtectedRoute";
import PublicRoute from "./PublicRoute";
import ProductDetail from "../pages/ProductDetail";

const AppRoute = () => {
  let router = createBrowserRouter([
     {
      path: "/",
      element: <PublicRoute />,
      children: [
        {
          path: "",
          element: <AuthLayout />,
          children: [
            {
              path: "",
              element: <Register />,
            },
            {
              path: "login",
              element: <Login/>,
            },
          ],
        },
      ],
    },

    {
      path: "/main",
      element: <ProtectedRoute />,
      children: [
        {
          path: "",
          element: <Mainlayout />,
          children: [
            { path: "", element: <Home /> },
            { path: "shop", element: <Shop /> },
            {
              path: "about",
              element: <About />,
            },
            {
              path: "detail/:id",
              element: <ProductDetail />,
            },
          ],
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default AppRoute;