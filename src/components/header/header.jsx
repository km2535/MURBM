import React from "react";
import style from "./header.module.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faBars } from "@fortawesome/free-solid-svg-icons";

const Header = ({ view, setView }) => {
  const viewHandler = () => {
    setView(false);
  };
  return (
    <header className={style.header}>
      <div className={view === true ? style.back : style.nonBack}>
        <span className={style.logo}>
          <Link to="/">
            <img
              className={style.logoImg}
              src="/images/logo-all-white.png"
              alt="logo"
            />
            {view === false ? (
              <div className={style.home}>
                <FontAwesomeIcon icon={faBars} />
              </div>
            ) : (
              <div className={style.home}>
                <FontAwesomeIcon icon={faHome} onClick={viewHandler} />
              </div>
            )}
          </Link>
        </span>
      </div>
    </header>
  );
};

export default Header;
