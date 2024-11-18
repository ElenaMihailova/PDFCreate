import React, { useState } from "react";
import { AuthPageView } from "./AuthPageView";
import { useNavigate } from "react-router-dom";

export const AuthPage = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = (event: React.FormEvent) => {
    event.preventDefault();
    navigate("/clinics");
    console.log("Авторизация");
  };

  return (
    <AuthPageView
      handleLogin={handleLogin}
      login={login}
      setLogin={setLogin}
      password={password}
      setPassword={setPassword}
    />
  );
};
