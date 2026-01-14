import { useState, createContext, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '@/firebase-app/firebase-config';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const AuthContext = createContext();

const AuthProvider = (props) => {
  const [userInfo, setUserInfo] = useState({});
  const navigate = useNavigate();
  const verifyPermission = ({ role, redirect = true, alert = true } = {}) => {
    if (!userInfo) {
      if (redirect) navigate('/sign-in');
      return false;
    }

    if (role && userInfo.role !== role) {
      if (alert) Swal.fire('Failed', 'You have no right to do this action', 'warning');
      return false;
    }

    return true;
  };

  const value = {
    userInfo,
    verifyPermission,
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
