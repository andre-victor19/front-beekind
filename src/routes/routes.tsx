import React, { Suspense } from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import Layout from "../layout";

const Home = React.lazy(() => import("../pages/Home"));
const Doctor = React.lazy(() => import("../pages/Doctor"));

export const router = createBrowserRouter([
  {
    id: "home",
    path: "/",
    element: (
      <Suspense fallback={<div>Carregando...</div>}>
        <Layout>
          <Home />
        </Layout>
      </Suspense>
    ),
  },
  {
    id: "doctor",
    path: "/doctor",
    element: (
      <Suspense fallback={<div>Carregando...</div>}>
        <Layout>
          <Doctor />
        </Layout>
      </Suspense>
    ),
  },
  {
    id: "hidden-default",
    path: "*",
    element: <Navigate to="/" replace />,
  },
]);
