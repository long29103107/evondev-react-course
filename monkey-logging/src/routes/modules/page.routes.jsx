import { lazy } from 'react';

const HomePage = lazy(() => import('@/pages/HomePage'));
const SignUpPage = lazy(() => import('@/pages/SignUpPage'));
const SignInPage = lazy(() => import('@/pages/SignInPage'));
const CategoryPage = lazy(() => import('@/pages/CategoryPage'));
const PostDetailsPage = lazy(() => import('@/pages/PostDetailsPage'));
const PageNotFound = lazy(() => import('@/pages/PageNotFound'));

export const pageRoutes = [
  { path: '/', element: <HomePage /> },
  { path: '/sign-up', element: <SignUpPage /> },
  { path: '/sign-in', element: <SignInPage /> },
  { path: '/category/:slug', element: <CategoryPage /> },
  { path: '/:slug', element: <PostDetailsPage /> },
  { path: '*', element: <PageNotFound /> },
];
