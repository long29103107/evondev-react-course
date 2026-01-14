import { lazy } from "react";

const HomePage = lazy(() => import('@/pages/HomePage'));
const CategoryPage = lazy(() => import('@/pages/CategoryPage'));
const PostDetailsPage = lazy(() => import('@/pages/PostDetailsPage'));
const SignInPage = lazy(() => import('@/pages/SignInPage'));
const SignUpPage = lazy(() => import('@/pages/SignUpPage'));

export const publicRoutes = [
  { path: '/', element: <HomePage /> },
  { path: '/sign-in', element: <SignInPage /> },
  { path: '/sign-up', element: <SignUpPage /> },
  { path: '/category/:slug', element: <CategoryPage /> },
  { path: '/:slug', element: <PostDetailsPage /> },
];