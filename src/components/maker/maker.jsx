import React from "react";
import Footer from "../footer/footer";
import Header from "../header/header";
import styles from "./maker.module.css";

const Maker = ({ userExist }) => {
  const onLogout = () => {};
  return (
    <section className={styles.maker} userExist={userExist}>
      <Header onLogout={onLogout} />
      <Footer />
    </section>
  );
};
export default Maker;
