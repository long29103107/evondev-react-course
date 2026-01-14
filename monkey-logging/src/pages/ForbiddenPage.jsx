import ErrorPage from "./ErrorPage";
const ForbiddenPage = () => {
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
