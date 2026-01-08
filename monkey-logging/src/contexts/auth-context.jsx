import { useState, createContext } from "react";

const AuthContext = createContext();

const AuthProvider = (props) => {
    const [userInfo, setUserInfo] = useState({});
    const value = {
        userInfo,
        setUserInfo,
    };
    return <AuthContext.Provider value={value} {...props}></AuthContext.Provider>
};

export { AuthContext, AuthProvider };