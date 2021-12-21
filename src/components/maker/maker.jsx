import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../footer/footer";
import Header from "../header/header";
import styles from "./maker.module.css";
import Editor from "../editor/editor";
import Preview from "../preview/preview";

const Maker = ({ authService }) => {
  const [cards, setCards] = useState([
    {
      id: "1",
      name: "Juhyun",
      company: "Samsung",
      theme: "dark",
      title: "Software Engineer",
      email: "boochickenood@gmail.com",
      message: "go for it",
      fileName: "Juhyun",
      fileURL: null,
    },
    {
      id: "2",
      name: "Juhyun",
      company: "Samsung",
      theme: "light",
      title: "Software Engineer",
      email: "boochickenood@gmail.com",
      message: "go for it",
      fileName: "Juhyun",
      fileURL: "juhyun.png",
    },
    {
      id: "3",
      name: "Juhyun",
      company: "Samsung",
      theme: "colorful",
      title: "Software Engineer",
      email: "boochickenood@gmail.com",
      message: "go for it",
      fileName: "Juhyun",
      fileURL: null,
    },
  ]);
  const navigate = useNavigate();
  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (!user) {
        navigate("/");
      }
    });
  }, []);

  const addCard = (card) => {
    const updated = [...cards, card];
    setCards(updated);
  };
  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor cards={cards} addCard={addCard} />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};
export default Maker;
