import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../footer/footer";
import Header from "../header/header";
import styles from "./maker.module.css";
import Editor from "../editor/editor";
import Preview from "../preview/preview";

const Maker = ({ authService }) => {
  const [cards, setCards] = useState({
    1: {
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
    2: {
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
    3: {
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
  });

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

  const createOrUpdateCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      updated[card.id] = card;
      // updated[이 괄호 부분에서 key 값을 받는 것( key 값이 card의 id 부분이라 card.id의 값이 key값과 같은 card를
      // update한다고 보면 된다! )]
      return updated;
    });
  };
  // const updateCard = (card) => {
  //   const updated = cards.map(item=>{
  //     if(card.id === item.id)
  //   })
  // } 이런식으로 아주 긴 object를 map으로 돌면 성능에 좋지 않다. object의 개수만큼 수행속도가 늘어나기 때문

  const deleteCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      delete updated[card.id];
      return updated;
    });
  };
  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor
          cards={cards}
          addCard={createOrUpdateCard}
          updateCard={createOrUpdateCard}
          deleteCard={deleteCard}
        />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};
export default Maker;
