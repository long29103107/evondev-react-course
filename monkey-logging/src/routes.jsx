// src/routes/routes.jsx
import { useRoutes } from "react-router-dom";
import { lazy } from "react";
const HomePage = lazy(() => import("@/pages/HomePage"));
const SignUpPage = lazy(() => import("@/pages/SignUpPage"));

const AppRoutes = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/sign-up",
      element: <SignUpPage />,
    },
  ]);

  return routes;
};

export default AppRoutes;
