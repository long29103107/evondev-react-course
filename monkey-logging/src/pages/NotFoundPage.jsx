import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const NotFoundPageStyles = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .logo {
    display: inline-block;
    margin-bottom: 40px;
  }
  .heading {
    font-size: 60px;
    font-weight: 700;
    margin-bottom: 20px;
  }
  .back-to-home {
    display: inline-block;
    padding: 15px 30px;
    color: white;
    background-color: ${(props) => props.theme.primary};
    border-radius: 4px;
  }
`;
const NotFoundPage = () => {
  return (
    <NotFoundPageStyles>
      <NavLink to={'/'} className="logo">
        <img srcSet="/logo.png 2x" alt="monkey-logo" className="logo" />
      </NavLink>
      <h1 className="heading">Oops! Page not found</h1>
      <NavLink to={'/'} className="back-to-home">
        Back to home
      </NavLink>
    </NotFoundPageStyles>
  );
};

export default NotFoundPage;
