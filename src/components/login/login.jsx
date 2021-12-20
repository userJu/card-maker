import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
  onAuthStateChanged,
} from "firebase/auth";
import { firebaseApp } from "../../service/fireBase";
import Footer from "../footer/footer";
import Header from "../header/header";
import styles from "./login.module.css";
import App from "../../app";

const Login = ({ authService }) => {
  const navigate = useNavigate();
  const goToMaker = (userId) => {
    navigate("/maker", {
      pathname: "/maker",
      state: { id: userId },
    });
  };

  const onLogin = (e) => {
    authService //
      .login(e.currentTarget.innerText)
      .then((data) => goToMaker(data.user.uid));
    console.dir(e.currentTarget.innerText);
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      user && goToMaker(user.uid);
      user && console.log(user.uid);
    });
  }, []);

  return (
    <section className={styles.login}>
      <Header />
      <section>
        <h1>Login</h1>
        <ul className={styles.list}>
          <li className={styles.item}>
            <button className={styles.button} onClick={onLogin}>
              Google
            </button>
          </li>
          <li className={styles.item}>
            <button className={styles.button} onClick={onLogin}>
              Github
            </button>
          </li>
        </ul>
      </section>
      <Footer />
    </section>
  );
};

export default Login;
