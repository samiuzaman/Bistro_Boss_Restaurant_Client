import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.init";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import UseAxiosPublic from "../Hooks/UseAxiosPublic";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const axiosPublic = UseAxiosPublic();

  // Login with Google
  const googleProvider = new GoogleAuthProvider();
  const loginWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // Create New Account with email and password
  const createAccount = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Login with Email & Password
  const loginEmailPassword = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Update Profile
  const profileUpdate = (updatedData) => {
    const { displayName, photoURL } = updatedData;
    setUser((prev) => {
      return {
        ...prev,
        displayName,
        photoURL,
      };
    });
    return updateProfile(auth.currentUser, updatedData);
  };

  // Log Out User
  const handleSignOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  // Log retention function
  useEffect(() => {
    const unsubcribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        // get token and store client
        const userInfo = {
          email: currentUser?.email,
        };
        axiosPublic.post("/jwt", userInfo).then((res) => {
          if (res.data.token) {
            localStorage.setItem("access-token", res.data.token);
          }
        });
      } else {
        // remove token(if token stored in the client side: Local Storeage, cashing, in memory)
        localStorage.removeItem("access-token");
      }
      setLoading(false);
    });

    return () => {
      unsubcribe();
    };
  }, [axiosPublic]);

  const authInfo = {
    user,
    setUser,
    loading,
    setLoading,
    loginWithGoogle,
    createAccount,
    loginEmailPassword,
    handleSignOut,
    profileUpdate,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
