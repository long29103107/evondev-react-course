import Layout from '@/components/layout/Layout';
import HomeBanner from '@/module/home/HomeBanner';
import HomeFeature from '@/module/home/HomeFeature';
import HomeNewest from '@/module/home/HomeNewest';
import usePageTitle from '@/hooks/usePageTitle';
import styled from 'styled-components';

const HomePageStyles = styled.div``;

const HomePage = () => {
  usePageTitle('Home | Monkey Blogging');
  return (
    <HomePageStyles>
      <Layout>
        <HomeBanner />
        <HomeFeature />
        <HomeNewest />
      </Layout>
    </HomePageStyles>
  );
};

export default HomePage;
