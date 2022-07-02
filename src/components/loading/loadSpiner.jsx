import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import style from "./loadSpiner.module.css";

const LoadSpiner = ({ model }) => {
  return (
    <div className={style.spinerContainer}>
      {model && <FontAwesomeIcon className={style.spinner} icon={faSpinner} />}
    </div>
  );
};

export default LoadSpiner;
