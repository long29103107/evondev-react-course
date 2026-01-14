import { lazy } from 'react';

const PostManage = lazy(() => import('@/module/post/PostManage'));
const PostAddNew = lazy(() => import('@/module/post/PostAddNew'));
const PostUpdate = lazy(() => import('@/module/post/PostUpdate'));

export const postRoutes = [
  { path: 'manage/posts', element: <PostManage /> },
  { path: 'manage/add-post', element: <PostAddNew /> },
  { path: 'manage/update-post', element: <PostUpdate /> },
];
