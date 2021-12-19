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
import AuthService from "../../service/auth_service";

const Login = ({ AuthService }) => {
  const [userExist, setUserExist] = useState("false");
  console.log(userExist);
  const navigate = useNavigate();
  const goToMaker = (userId) => {
    navigate("/maker", {
      pathname: "/maker",
      state: { id: userId },
    });
  };
  console.log(AuthService);

  const onLogin = (e) => {
    // const auth = getAuth();
    // const providerName = e.currentTarget.textContent;
    // if (providerName === "Google") {
    //   const provider = new GoogleAuthProvider();
    //   signInWithPopup(auth, provider);
    // } else if (providerName === "Github") {
    //   const provider = new GithubAuthProvider();
    //   signInWithPopup(auth, provider);
    // }
    AuthService;
  };

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        console.log(uid);
        setUserExist(true);
      } else {
        setUserExist(false);
      }
    });
  }, []);

  return (
    <section className={styles.login}>
      <Header userExist={userExist} />
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
