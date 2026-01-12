import { lazy } from "react";

const HomePage = lazy(() => import("@/pages/HomePage"));
const SignUpPage = lazy(() => import("@/pages/SignUpPage"));
const SignInPage = lazy(() => import("@/pages/SignInPage"));
const NotFoundPage = lazy(() => import("@/pages/NotFoundPage"));

export const pageRoutes = [
  { path: "/", element: <HomePage />, title: "Home" },
  { path: "/home", element: <HomePage /> },
  { path: "/sign-up", element: <SignUpPage /> },
  { path: "/sign-in", element: <SignInPage /> },
  { path: "*", element: <NotFoundPage /> },
];