import Layout from "@/components/layout/Layout";
import { Toggle } from "@/components/toggle";
// import HomeBanner from "@/module/home/HomeBanner";
// import HomeFeature from "@/module/home/HomeFeature";
// import HomeNewest from "@/module/home/HomeNewest";
import React from "react";
import styled from "styled-components";

const HomePageStyles = styled.div``;

const HomePage = () => {
  return (
    <HomePageStyles>
      <Layout>
        <Toggle></Toggle>
        {/* <HomeBanner></HomeBanner> */}
        {/* <HomeFeature></HomeFeature> */}
        {/* <HomeNewest></HomeNewest> */}
      </Layout>
    </HomePageStyles>
  );
};

export default HomePage;