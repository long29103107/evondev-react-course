import React from 'react';
import ErrorPage from './ErrorPage';
import usePageTitle from '@/hooks/usePageTitle';

const NotFoundPage = () => {
  usePageTitle('Not Found | Monkey Blogging');
  return (
    <ErrorPage
      image="/404.png"
      heading="404 - Page not found"
      description="Maybe this page used to exist or you just spelled something wrong. Chances are your spelled something wrong, so can you double check the URL?"
      altText="notfound"
    />
  );
};

export default NotFoundPage;
