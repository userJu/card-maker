import React, { useState } from "react";
import Footer from "../components/footer/footer";
import Header from "../components/header/header";
import Login from "../components/login/login";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const Home = (props) => {
  const [userLogin, setUserLogin] = useState(false);
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      console.log("로그인되었다");
      setUserLogin(true);
    } else {
      console.log("로그인되지않았다");
      setUserLogin(false);
    }
  });
  const onLogoutClick = () => {
    console.log("로그아웃");
    setUserLogin(false);
  };

  return (
    <>
      <Header userLogin={userLogin} onLogoutClick={onLogoutClick} />
      <Login />
      <Footer />
    </>
  );
};

export default Home;
