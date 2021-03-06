import React, { createContext, useContext, useReducer } from "react";
import { authReducer } from "../reducers/index";
import { useNavigate } from "react-router-dom";
import { authActions } from "../reducers/index";
import toast from "react-hot-toast";
import axios from "axios";

const authContext = createContext({});

const useAuth = () => useContext(authContext);

const { SIGN_IN, SIGN_OUT } = authActions;

function AuthProvider({ children }) {
  const navigate = useNavigate();
  const [authState, authDispatch] = useReducer(authReducer, {
    token: localStorage.getItem("token") || "",
  });

  const signUp = async (input) => {
    try {
      const res = await axios.post("/api/auth/signup", input);

      if (res.status === 201) {
        navigate("/signin");
        toast.success("Account created successfully");
      }
    } catch (err) {
      console.log(err);
      toast.error(err.response.data.error[0]);
    }
  };

  const signIn = async (input) => {
    try {
      const res = await axios.post("/api/auth/login", input);

      if (res.status === 200) {
        const { encodedToken, foundUser: { firstName } } = res.data;
        localStorage.setItem("token", encodedToken);
        authDispatch({ type: SIGN_IN, payload: { token: encodedToken } });
        navigate("/");
        toast.success(`Hey!, ${firstName}`, { icon: "👋" });
      } else {
        toast.error(
          "Something went wrong, check the credentials and try again"
        );
      }
    } catch (err) {
      console.log(err);
      toast.error("Something went wrong, check the credentials and try again");
    }
  };

  const signOut = () => {
    localStorage.removeItem("token");
    authDispatch({ type: SIGN_OUT });
    navigate("/");
    toast.success("Signed out");
  };

  return (
    <authContext.Provider value={{ authState, signUp, signIn, signOut }}>
      {children}
    </authContext.Provider>
  );
}

export { useAuth, AuthProvider };
