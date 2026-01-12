import { lazy } from "react";

const UserManage = lazy(() => import("@/module/user/UserManage"));
const UserAddNew = lazy(() => import("@/module/user/UserAddNew"));
const UserUpdate = lazy(() => import("@/module/user/UserUpdate"));
const UserProfile = lazy(() => import("@/module/user/UserProfile"));

export const userRoutes = [
  { path: "manage/user", element: <UserManage /> },
  { path: "manage/add-user", element: <UserAddNew /> },
  { path: "manage/update-user", element: <UserUpdate /> },
  { path: "profile", element: <UserProfile /> },
];
