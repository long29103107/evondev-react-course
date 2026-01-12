// import { signOut } from "firebase/auth";
// import { auth } from "@/firebase/firebase-config";
// import { toast } from "react-toastify";
// import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Header from "@/layout/Header";

const HomePageStyles = styled.div`
  min-height: 100vh;
`;

const HomePage = () => {
  return (
    <HomePageStyles>
      <Header></Header>
    </HomePageStyles>
  );
};

export default HomePage;

// const HomePage = () => {
//   // const { userInfo } = useAuth();
//   const navigate = useNavigate();
//   const handleSignOut = async () => {
//     await signOut(auth);
//     toast.success("Sign out successfully");
//     navigate("/sign-in");
//   };

//   return <button onClick={handleSignOut}>Sign Out</button>;
// };
