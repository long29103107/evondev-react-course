// src/routes/routes.config.jsx
import { pageRoutes } from "./modules/page.routes";
import { postRoutes } from "./modules/post.routes";

export const appRoutes = [
  ...pageRoutes,
  ...postRoutes,
];