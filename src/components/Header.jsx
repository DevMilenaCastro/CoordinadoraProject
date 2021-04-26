import React from "react";
import logo from "../assets/images/Imagen 1.svg";
import "../assets/styles/components/_header.scss";

const Header = () => (
  <header>
    <div className="header">
      <figure className="header__logo">
        <img
          className="header__logo--img"
          src={logo}
          alt="Logo del portafolio"
        />
      </figure>
    </div>
  </header>
);

export default Header;
