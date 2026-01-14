import ErrorPage from "./ErrorPage";

const UnauthorizedPage = () => {
  return (
    <ErrorPage
      image="/401.png"
      heading="401 - Unauthorized"
      description="You are not authorized to access this page."
      altText="unauthorized"
    />
  );
};

export default UnauthorizedPage;
