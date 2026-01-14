// src/routes/routes.config.jsx
import { pageRoutes } from '@/routes/modules/page.routes';
import { postRoutes } from '@/routes/modules/post.routes';

export const appRoutes = [...pageRoutes, ...postRoutes];
