import { useState, createContext, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/firebase-app/firebase-config";

const AuthContext = createContext();

const AuthProvider = (props) => {
  const [userInfo, setUserInfo] = useState({});
  const value = {
    userInfo,
    setUserInfo,
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUserInfo(user);
    });
    return () => unsubscribe();
  }, []);

  return <AuthContext.Provider value={value} {...props}></AuthContext.Provider>;
};

export { AuthContext, AuthProvider };
