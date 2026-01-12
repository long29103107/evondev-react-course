import { useState, useEffect } from "react";
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
import { auth, db } from "@/firebase-app/firebase-config";
import { useNavigate, NavLink } from "react-router-dom";
import { collection, setDoc, doc } from "firebase/firestore";
import AuthenticationPage from "@/pages/AuthenticationPage";

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
      toast.error(arrErrors[0]?.message, {
        pauseOnHover: false,
        delay: 0,
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

  useEffect(() => {
    document.title = "Sign Up | Monkey Blogging";
  }, []);

  return (
    <AuthenticationPage>
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

        <div className="have-account mb-4">
          <span>You already have an account?</span>
          <NavLink to={"/sign-in"}>Sign In</NavLink>
        </div>
        <Button
          type="submit"
          className="w-full max-w-[300px] m-auto"
          isLoading={isSubmitting}
          disabled={isSubmitting}
        >
          Sign Up
        </Button>
      </form>
    </AuthenticationPage>
  );
};

export default SignUpPage;
