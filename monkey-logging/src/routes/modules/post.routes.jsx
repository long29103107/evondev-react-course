// src/routes/modules/post.routes.jsx
import { lazy } from "react";

const PostManage = lazy(() => import("@/module/post/PostManage"));
const PostAdd = lazy(() => import("@/module/post/PostAddNew"));
const PostUpdate = lazy(() => import("@/module/post/PostUpdate"));

export const postRoutes = [
  {
    path: "/manage/posts",
    element: <PostManage />,
  },
  {
    path: "/manage/posts/add",
    element: <PostAdd />,
  },
  {
    path: "/manage/posts/:id",
    element: <PostUpdate />,
  },
];