import { publicRoutes } from './modules/public.routes';
import { dashboardRoutes } from './modules/dashboard.routes';
import UnauthorizedPage from '@/pages/error/UnauthorizedPage';
import ForbiddenPage from '@/pages/error/ForbiddenPage';
import NotFoundPage from '@/pages/error/NotFoundPage';

export const appRoutes = [
  ...publicRoutes,
  ...dashboardRoutes,
  { path: '/unauthorized', element: <UnauthorizedPage /> },
  { path: '/forbidden', element: <ForbiddenPage /> },
  { path: '/not-found', element: <NotFoundPage /> },
  { path: '*', element: <NotFoundPage /> },
];
