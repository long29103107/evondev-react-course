import { useState } from "react";
import styled from "styled-components";
import { Label } from "@/components/label";
import { Input } from "@/components/input";
import { useForm } from "react-hook-form";
import { IconEyeOpen, IconEyeClose } from "@/components/icon";
import { Field } from "@/components/field";

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

  .form {
    max-width: 800px;
    margin: 0 auto;
  }
`;

const SignUpPage = () => {
  const {
    control,
    handleSubmit
  } = useForm();

  const handleSignUp = (values) => {
    console.log(values);
  };

  const [showPassword, setShowPassword] = useState(false);

  return (
    <SignUpPageStyled>
      <div className="container">
        <img srcSet="/logo.png 2x" alt="monkey-logo" className="logo" />
        <h1 className="heading">Monkey Blogging</h1>
        <form className="form" onSubmit={handleSubmit(handleSignUp)}>
          <Field>
            <Label htmlFor="fullName">Full Name</Label>
            <Input
              type="text"
              name="fullName"
              placeholder="Enter your full name"
              control={control}
            />
          </Field>
          <Field>
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              name="email"
              placeholder="Enter your email"
              control={control}
            />
          </Field>
          <Field>
            <Label htmlFor="password">Password</Label>
            <Input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Enter your password"
              control={control}
            >
              {showPassword 
               ? <IconEyeOpen onClick={() => setShowPassword(false)} /> 
               : <IconEyeClose onClick={() => setShowPassword(true)} />}
            </Input>
          </Field>
        </form>
      </div>
    </SignUpPageStyled>
  );
};

export default SignUpPage;
