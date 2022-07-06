import React from "react";
import style from "./header.module.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faPlusCircle } from "@fortawesome/free-solid-svg-icons";

const Header = ({ view, setView, setPostit }) => {
  const viewHandler = () => {
    setView(false);
  };
  const postHandler = () => {
    setPostit(true);
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
              <div className={style.home}></div>
            ) : (
              <div className={style.home}>
                <FontAwesomeIcon
                  icon={faHome}
                  onClick={viewHandler}
                  className={style.icon}
                />
                <FontAwesomeIcon
                  icon={faPlusCircle}
                  className={style.icon}
                  onClick={postHandler}
                />
              </div>
            )}
          </Link>
        </span>
      </div>
    </header>
  );
};

export default Header;
