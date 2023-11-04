import React from "react";
import HeaderLogo from "../images/yugi-logo.png";

const HeaderSection = () => {
  return (
    <header className="header-top-layout">
      <img className="logo-image" src={HeaderLogo} alt="logo icon" />
      <h1 className="title">Yugioh-Deck-Builder</h1>
    </header>
  );
};

export default HeaderSection;
