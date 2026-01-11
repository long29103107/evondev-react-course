// src/routes/routes.jsx
import { useRoutes } from "react-router-dom";
import { lazy } from "react";
const HomePage = lazy(() => import("@/pages/HomePage"));
const SignUpPage = lazy(() => import("@/pages/SignUpPage"));
const SignInPage = lazy(() => import("@/pages/SignInPage"));

const AppRoutes = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <HomePage />,
      title: "Home",
    },
    {
      path: "/home",
      element: <HomePage />,
      handle: {
        title: "Home | Monkey Blogging",
      },
    },
    {
      path: "/sign-up",
      element: <SignUpPage />,
      handle: {
        title: "Sign Up | Monkey Blogging",
      },
    },
    {
      path: "/sign-in",
      element: <SignInPage />,
      handle: {
        title: "Sign In | Monkey Blogging",
      },
    },
  ]);

  return routes;
};

export default AppRoutes;
