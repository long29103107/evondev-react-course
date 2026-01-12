import useAuth from "@/hooks/useAuth";
import AuthenticationPage from "@/pages/AuthenticationPage";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { useState, useEffect } from "react";
import { Label } from "@/components/label";
import { Input } from "@/components/input";
import { IconEyeOpen, IconEyeClose } from "@/components/icon";
import { Field } from "@/components/field";
import { Button } from "@/components/button";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebase-app/firebase-config";
import { useNavigate, NavLink } from "react-router-dom";

const schema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter a valid email address")
    .required("Please enter your email address"),
  password: yup
    .string()
    .required("Please enter your password")
    .min(8, "Password must be at least 8 characters long"),
});

const SignInPage = () => {
  const { userInfo } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Sign In | Monkey Blogging";
    if (userInfo?.email) {
      navigate("/");
    }
  }, [userInfo, navigate]);

  const {
    handleSubmit,
    control,
    formState: { isSubmitting, isValid, errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
    defaultValues: {
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

  const handleSignIn = async (values) => {
    if (!isValid) return;

    await signInWithEmailAndPassword(auth, values.email, values.password);

    toast.success("Sign in successfully");
    navigate("/");
  };

  const [showPassword, setShowPassword] = useState(false);

  return (
    <AuthenticationPage>
      <form className="form" onSubmit={handleSubmit(handleSignIn)}>
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

        <div className="have-account  mb-4">
          <span>You have no account yet?</span>
          <NavLink to={"/sign-up"}>Sign Up</NavLink>
        </div>

        <Button
          type="submit"
          className="w-full max-w-[300px] m-auto"
          isLoading={isSubmitting}
          disabled={isSubmitting}
        >
          Sign In
        </Button>
      </form>
    </AuthenticationPage>
  );  
};

export default SignInPage;
