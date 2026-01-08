import React from 'react'
import styled from 'styled-components'
import Label from '@/components/label'

const SignUpPageStyled = styled.div`
    min-height: 100vh;
    padding: 40px;

    .logo {
      margin: 0 auto 20px;
    }

    .heading {
      text-align: center;
      color: ${props => props.theme.primary};
      font-size: 40px;
      font-weight: bold;
      margin-bottom: 60px;
    }
    
    .field {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      row-gap: 20px;
    }

    .input {
      width: 100%;
      padding: 20px;
      background-color: ${props => props.theme.grayLight};
      border-radius: 8px;
      transition: all 0.2s linear;
      border: 1px solid transparent;
    }

    .input:focus {
      background-color: ${props => props.theme.white};
      border-color: ${props => props.theme.primary};
      outline: none;
    }

    .input::-webkit-input-placeholder {
      color: #84878b;
    }

    .input::-moz-placeholder {
      color: #84878b;
    }

    .form {
      max-width: 800px;
      margin: 0 auto;
    }
`

const SignUpPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.fullName.value);
  }

  
  return (
    <SignUpPageStyled>
      <div className="container">
        <img srcSet="/logo.png 2x" alt="monkey-logo" className="logo"/>
        <h1 className="heading">Monkey Blogging</h1>
        <form className="form" onSubmit={handleSubmit}>
          <div className="field">
            <Label htmlFor="fullName">Full Name</Label>
            <input type="text" id="fullName" name="fullName" className="input" placeholder="Enter your fullname" />
          </div>
        </form>
      </div>
    </SignUpPageStyled>
  )
}

export default SignUpPage;