import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const ErrorPageStyles = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: ${(props) => props.theme.black};
  color: white;
  .page-content {
    max-width: 1000px;
    margin: 0 auto;
    text-align: center;
  }
  .logo {
    display: inline-block;
    margin-bottom: 40px;
  }
  .heading {
    font-size: 60px;
    font-weight: bold;
    margin-bottom: 20px;
  }
  .description {
    max-width: 800px;
    margin: 0 auto 40px;
  }
  .back {
    display: inline-block;
    padding: 15px 30px;
    color: white;
    background-image: linear-gradient(
      to right top,
      ${(props) => props.theme.primary},
      ${(props) => props.theme.secondary}
    );
    border-radius: 8px;
    font-weight: 500;
  }
  .image {
    max-width: 250px;
    margin: 0 auto 40px;
  }
`;

const ErrorPage = ({ image, heading, description, altText }) => {
  const navigate = useNavigate();
  return (
    <ErrorPageStyles>
      <div className="page-content">
        <img src={image} alt={altText} className="image" />
        <h1 className="heading">{heading}</h1>
        <p className="description">{description}</p>
        <button onClick={() => navigate('/')} className="back">
          Back to home
        </button>
      </div>
    </ErrorPageStyles>
  );
};

export default ErrorPage;

{
  /* <NavLink to={'/'} className="logo">
  <img srcSet="/logo.png 2x" alt="monkey-logo" className="logo" />
</NavLink>
<h1 className="heading">{message}</h1>
<NavLink to={'/'} className="back-to-home">
  Back to home
</NavLink> */
}