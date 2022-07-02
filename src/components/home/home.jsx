import React from "react";
import StartBtn from "../startBtn/startBtn";
import style from "./home.module.css";
const Home = ({ handlerView, view }) => {
  return (
    <>
      <section id={style.banner} className={style.banner}>
        <div className={view !== true ? style.container : style.hiddenHome}>
          <div className={style.inner}>
            <header className={style.major}>
              <h1>Welcome</h1>
              <h2>This site is check your Business Model </h2>
            </header>
            <div className={style.content}>
              <p className={style.sub}>
                Click the ‘GET START’ btn and
                <br />
                Make it yourself for business mode.
              </p>
              <StartBtn onHandlerView={handlerView} />
            </div>
          </div>
          <div className={style.backImage}></div>
        </div>
      </section>
    </>
  );
};

export default Home;
