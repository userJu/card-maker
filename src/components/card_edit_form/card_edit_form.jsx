import React, { useRef } from "react";
import Button from "../button/button";
import ImageFileInput from "../image_file_input/image_file_input";
import styles from "./card_edit_form.module.css";

const CardEditForm = ({ card, updateCard, deleteCard }) => {
  const formRef = useRef();
  const nameRef = useRef();
  const companyRef = useRef();
  const themeRef = useRef();
  const titleRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();
  const { name, company, title, email, message, theme, fileName, fileURL } =
    card;
  const onChange = (e) => {
    if (e.currentTarget == null) {
      return;
    }
    e.preventDefault();
    updateCard({
      // updateCard라는 함수는 editForm에서 onChange가 발생했을 때 이용된다
      ...card,
      // update할 card를 받아서
      [e.currentTarget.name]: e.currentTarget.value,
      // key에는 target의 name 그러니까 name="company" 이 부분을 받아오고(name="company"라면 company:가 되는것)
      // 그 value를 target의 value로 받아온다.
    });
  };
  const onSubmit = (e) => {
    deleteCard(card);
  };
  return (
    <form className={styles.form} ref={companyRef}>
      <input
        className={styles.input}
        type="text"
        name="name"
        value={name}
        ref={nameRef}
        onChange={onChange}
      />
      <input
        className={styles.input}
        type="text"
        name="company"
        value={company}
        ref={companyRef}
        onChange={onChange}
      />
      <select
        className={styles.select}
        name="theme"
        value={theme}
        onChange={onChange}
        ref={themeRef}
      >
        <option value="light">light</option>
        <option value="dark">dark</option>
        <option value="colorful">colorful</option>
      </select>
      <input
        className={styles.input}
        type="text"
        name="title"
        value={title}
        onChange={onChange}
        ref={titleRef}
      />
      <input
        className={styles.input}
        type="text"
        name="email"
        value={email}
        onChange={onChange}
        ref={emailRef}
      />
      <textarea
        className={styles.textarea}
        name="message"
        value={message}
        onChange={onChange}
        ref={messageRef}
      />
      <div className={styles.fileInput}>
        <ImageFileInput />
      </div>
      <Button name="Delete" onClick={onSubmit} />
    </form>
  );
};

export default CardEditForm;
