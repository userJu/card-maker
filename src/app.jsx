import React from "react";
import Login from "./components/login/login";
import styles from "./app.module.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Maker from "./components/maker/maker";

function App({ authService }) {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/maker" element={<Maker />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
