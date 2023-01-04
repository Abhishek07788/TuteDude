import React from "react";
import style from "./navbar.module.css";
import logo from "./svg/logo.svg";
import personSvg from "./svg/persion.svg";
import { FiChevronDown } from "react-icons/fi";

export const Navbar = () => {
  return (
    <div>
      <nav className={style.nav}>
        <div className={style.logo}>
          <img src={logo} alt="logo" />
        </div>
        <div className={style.option}>
          <p>My Assignment</p>
          <p>Chat with Mentor</p>
          <div>
            <img src={personSvg} alt="personSvg" />
            <span>ProfileName</span>
            <FiChevronDown />
          </div>
        </div>
      </nav>
    </div>
  );
};
