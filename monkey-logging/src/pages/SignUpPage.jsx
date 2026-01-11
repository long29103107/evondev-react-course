import { useState, useEffect } from "react";
import styled from "styled-components";
import { Label } from "@/components/label";
import { Input } from "@/components/input";
import { useForm } from "react-hook-form";
import { IconEyeOpen, IconEyeClose } from "@/components/icon";
import { Field } from "@/components/field";
import { Button } from "@/components/button";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db } from "@/firebase/firebase-config";
import { useNavigate } from "react-router-dom";
import { collection, setDoc, doc } from "firebase/firestore";

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

const schema = yup.object().shape({
  fullName: yup.string().required("Please enter your full name"),
  email: yup
    .string()
    .email("Please enter a valid email address")
    .required("Please enter your email address"),
  password: yup
    .string()
    .required("Please enter your password")
    .min(8, "Password must be at least 8 characters long"),
});

const SignUpPage = () => {
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { isSubmitting, isValid, errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
    },
  });

  useEffect(() => {
    const arrErrors = Object.values(errors);
    if (arrErrors.length > 0) {
      toast.error(arrErrors[0].message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }, [errors]);

  const handleSignUp = async (values) => {
    if (!isValid) return;

    const user = await createUserWithEmailAndPassword(
      auth,
      values.email,
      values.password
    );
    console.log("Sign up user", user);

    await updateProfile(auth.currentUser, {
      displayName: values.fullName,
    });

    const colRef = collection(db, "users");
    await setDoc(doc(colRef, user.user.uid), {
      fullName: values.fullName,
      email: values.email,
      password: values.password,
      createdAt: new Date(),
    });

    toast.success("Sign up successfully");
    navigate("/");
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
              {showPassword ? (
                <IconEyeOpen onClick={() => setShowPassword(false)} />
              ) : (
                <IconEyeClose onClick={() => setShowPassword(true)} />
              )}
            </Input>
          </Field>
          <Button
            type="submit"
            className="w-full max-w-[300px] mx-auto"
            isLoading={isSubmitting}
            disabled={isSubmitting}
          >
            Sign Up
          </Button>
        </form>
      </div>
    </SignUpPageStyled>
  );
};

export default SignUpPage;
