import React from "react";
import style from "./startBtn.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";

const StartBtn = ({ onHandlerView }) => {
  return (
    <>
      <button className={style.btn} onClick={onHandlerView}>
        <p className={style.font}>get start</p>
        <FontAwesomeIcon className={style.arrow} icon={faArrowRightLong} />
      </button>
    </>
  );
};

export default StartBtn;
