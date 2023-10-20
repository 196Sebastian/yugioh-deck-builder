import React from "react";
import HeaderLogo from "./images/yugi-logo.png";

const HeaderSection = () => {
  return (
    <header className="header-toplayout">
      <img className="logo-image" src={HeaderLogo} />
    </header>
  );
};

export default HeaderSection;
