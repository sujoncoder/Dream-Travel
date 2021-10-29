import React from "react";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { useState } from "react";
import { useEffect } from "react";
const googleProvider = new GoogleAuthProvider();

const UseFirebase = () => {
  const [user, setUser] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const auth = getAuth();

  const googleSignIn = () => {
    setIsLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        setUser(user);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        // empty user
        setUser({});
      })
      .catch((error) => {
        // setError
        // setError(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });

    return () => unsubscribe;
  }, []);
  return {
    user,
    googleSignIn,
    isLoading,
    logOut,
  };
};

export default UseFirebase;
