import ErrorPage from "./ErrorPage";
import usePageTitle from '@/hooks/usePageTitle';

const ForbiddenPage = () => {
  usePageTitle('Forbidden | Monkey Blogging');

  return (
    <ErrorPage
      image="/403.png"
      heading="403 - Forbidden"
      description="You are not authorized to access this page."
      altText="forbidden"
    />
  );
};

export default ForbiddenPage;
