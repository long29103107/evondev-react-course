import { publicRoutes } from './modules/public.routes';
import { dashboardRoutes } from './modules/dashboard.routes';
import UnauthorizedPage from '@/pages/UnauthorizedPage';
import ForbiddenPage from '@/pages/ForbiddenPage';
import NotFoundPage from '@/pages/NotFoundPage';

export const appRoutes = [
  ...publicRoutes,
  ...dashboardRoutes,
  { path: '/unauthorized', element: <UnauthorizedPage /> },
  { path: '/forbidden', element: <ForbiddenPage /> },
  { path: '/not-found', element: <NotFoundPage /> },
  { path: '*', element: <NotFoundPage /> },
];
