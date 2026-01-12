import { lazy } from "react";

const CategoryManage = lazy(() =>
  import("@/module/category/CategoryManage")
);
const CategoryAddNew = lazy(() =>
  import("@/module/category/CategoryAddNew")
);
const CategoryUpdate = lazy(() =>
  import("@/module/category/CategoryUpdate")
);

export const categoryRoutes = [
  { path: "manage/category", element: <CategoryManage /> },
  { path: "manage/add-category", element: <CategoryAddNew /> },
  { path: "manage/update-category", element: <CategoryUpdate /> },
];
