import React from "react";

const Header = ({ userLogin, onLogoutClick }) => {
  return (
    <header>
      <img src="images/logo.png" alt="" />
      <h1>Business Card Maker</h1>
      {userLogin ? (
        <button onClick={onLogoutClick}>Logout</button>
      ) : (
        <h1>로그인안함</h1>
      )}
    </header>
  );
};

export default Header;
