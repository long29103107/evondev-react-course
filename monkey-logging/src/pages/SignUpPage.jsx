import React from "react";
import styled from "styled-components";
import { Label } from "@/components/label";
import { Input } from "@/components/input";
import { useForm } from "react-hook-form";
import IconEyeOpen from "@/components/icon/IconEyeOpen";

const SignUpPageStyled = styled.div`
  min-height: 100vh;
  padding: 40px;

  .logo {
    margin: 0 auto 20px;
  }

  .heading {
    text-align: center;
    color: ${(props) => props.theme.primary};
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

  .form {
    max-width: 800px;
    margin: 0 auto;
  }
`;

const SignUpPage = () => {
  const {
    control,
    handleSubmit, //,
    // formState: { errors, isValid, isSubmitting },
    // watch,
  } = useForm();

  const handleSignUp = (values) => {
    console.log(values);
  };

  return (
    <SignUpPageStyled>
      <div className="container">
        <img srcSet="/logo.png 2x" alt="monkey-logo" className="logo" />
        <h1 className="heading">Monkey Blogging</h1>
        <form className="form" onSubmit={handleSubmit(handleSignUp)}>
          <div className="field">
            <Label htmlFor="fullName">Full Name</Label>
            <Input
              type="text"
              name="fullName"
              placeholder="Enter your fullname"
              control={control}
              hasIcon={true}
            />
            <IconEyeOpen className="icon-eye" />
          </div>
        </form>
      </div>
    </SignUpPageStyled>
  );
};

export default SignUpPage;
