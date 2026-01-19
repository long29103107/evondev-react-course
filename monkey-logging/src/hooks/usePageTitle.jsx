import { useEffect } from "react";

const usePageTitle = (title, fallback = "Monkey Blogging") => {
  useEffect(() => {
    const resolvedTitle = typeof title === 'function' ? title() : title;
    document.title = resolvedTitle || fallback;
  }, [title, fallback]);
  return null;
};

export default usePageTitle;