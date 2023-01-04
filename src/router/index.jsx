import React from "react";
import { useRoutes } from "react-router-dom";
import Layout from "../layouts/Layout";
import SubLayout from "../layouts/SubLayout";
import MainView from "../pages/main";

const Router = () => {
  const routes = [
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <MainView /> },
        { path: "/", element: <MainView /> },
        { path: "/", element: <MainView /> },
        { path: "/", element: <MainView /> },
        { path: "/", element: <MainView /> },
        { path: "/", element: <MainView /> },
      ],
    },
    {
      path: "/2",
      element: <SubLayout />,
      children: [
        { path: "/", element: <MainView /> },
        { path: "/", element: <MainView /> },
      ],
    },
    {
      path: "/",
      element: <Layout />,
      children: [{ path: "/", element: <MainView /> }],
    },
  ];
  return useRoutes(routes);
};

export default Router;
