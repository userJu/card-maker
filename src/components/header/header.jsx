import React from "react";
import styles from "./header.module.css";

const Header = ({ userExist }) => {
  const userLogout = () => {
    console.log("userLogout");
  };
  return (
    <header className={styles.header}>
      {userExist && (
        <button className={styles.logout} onClick={userLogout}>
          Logout
        </button>
      )}
      <img className={styles.logo} src="images/logo.png" alt="" />
      <h1 className={styles.title}>Business Card Maker</h1>
    </header>
  );
};

export default Header;
