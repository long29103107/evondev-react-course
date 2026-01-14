import { lazy } from 'react';
import { postRoutes } from './post.routes';
import { categoryRoutes } from './category.routes';
import { userRoutes } from './user.routes';

const DashboardLayout = lazy(() => import('@/module/dashboard/DashboardLayout'));
const DashboardPage = lazy(() => import('@/pages/DashboardPage'));

export const dashboardRoutes = [
  {
    element: <DashboardLayout />,
    children: [
      { path: 'dashboard', element: <DashboardPage /> },
      ...postRoutes,
      ...categoryRoutes,
      ...userRoutes,
    ],
  },
];
