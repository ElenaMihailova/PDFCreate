import React, { useState } from "react";
import { AuthPageView } from "./AuthPageView";
import { useNavigate } from "react-router-dom";

export const AuthPage = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleLogin = (event: React.FormEvent) => {
    event.preventDefault();

    if (login === "user" && password === "123") {
      console.log("Авторизация успешна");
      navigate("/clinics");
    } else {
      console.log("Ошибка авторизации");
      setErrorMessage("Неверный логин или пароль");
    }}

  return (
    <AuthPageView
      handleLogin={handleLogin}
      login={login}
      setLogin={setLogin}
      password={password}
      setPassword={setPassword}
      errorMessage={errorMessage}
    />
  );
};
