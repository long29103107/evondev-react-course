import React from "react";
import Header from "@/components/layouts/Header";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <>
      <Header> </Header>
      <Outlet />
    </>
  );
};

export default Main;
