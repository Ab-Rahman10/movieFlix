import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase.config";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

export const AuthContext = createContext();
export const ThemeContext = createContext();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const googleProvider = new GoogleAuthProvider();

  // Dark mode toggle
  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem("isDarkMode", JSON.stringify(newMode));
  };

  // Load theme from localStorage
  useEffect(() => {
    const savedDarkMode = JSON.parse(localStorage.getItem("isDarkMode"));
    if (savedDarkMode !== null) {
      setIsDarkMode(savedDarkMode);
    }
  }, []);

  // create a user
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //   observer/ currently user
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);

      return () => {
        unSubscribe();
      };
    });
  }, []);

  //   Sign in user
  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //   logout
  const logOut = () => {
    return signOut(auth);
  };

  //   sign in with google
  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  //   update user
  const updateUser = (updateInfo) => {
    setLoading(true);
    return updateProfile(auth.currentUser, updateInfo);
  };

  const authInfo = {
    user,
    loading,
    setUser,
    createUser,
    signInUser,
    logOut,
    updateUser,
    signInWithGoogle,
  };
  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </ThemeContext.Provider>
  );
};

export default AuthProvider;
