import React from "react";
import style from "./header.module.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { AdvancedImage } from "@cloudinary/react";
const Header = ({ view, setView, setPostit, cld }) => {
  const logo = cld.image("murbm/logo.png");
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
            <AdvancedImage cldImg={logo} className={style.logoImg} />

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
