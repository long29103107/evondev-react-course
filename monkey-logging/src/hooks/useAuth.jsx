import { useContext } from "react";
import { AuthContext } from "@/contexts/auth-context";

const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  const { userInfo, isLoading } = context;
  const isAuthenticated = !!userInfo;
  const hasRole = (roles) => !userInfo?.role ? false : roles.includes(userInfo.role);

  return {
    userInfo,
    isLoading,
    isAuthenticated,
    hasRole
  };
};

export default useAuth;