import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LoadSpiner from "../loading/loadSpiner";
import style from "./model.module.css";

const Model = ({ view, onArticle }) => {
  const [model, setModel] = useState(false);
  const [resize, setResize] = useState(false);

  const handlerResize = () => {
    setResize(true);
  };

  useEffect(() => {
    setModel(view);
  }, [view]);

  useEffect(() => {
    window.addEventListener("resize", handlerResize);
    if (resize) {
      setTimeout(() => {
        setResize(false);
      }, 500);
    }
  }, [resize]);

  return (
    <>
      {resize ? (
        <LoadSpiner model={model} />
      ) : (
        <section
          id={model ? style.viewModel : style.hiddenModel}
          className={style.modelContainer}
        >
          <article className={style.modelContent}>
            <Link className={style.link} to="/partner">
              <div id={style.modelPartner}>
                <img
                  className={style.modelImg}
                  src={"/images/partnership.webp"}
                  alt=""
                />
                <span className={style.modelTitle}>
                  Key
                  <br />
                  Partner
                </span>
              </div>
            </Link>
          </article>
          <article className={style.modelContent}>
            <Link className={style.link} to="/activities">
              <div id={style.modelActivities}>
                <img
                  className={style.modelImg}
                  src={"/images/activity.webp"}
                  alt=""
                />
                <span className={style.modelTitle}>
                  Key
                  <br />
                  Activities
                </span>
              </div>
            </Link>
            <Link className={style.link} to="/resources">
              <div id={style.modelResource}>
                <img
                  className={style.modelImg}
                  src={"/images/resource.png"}
                  alt=""
                />
                <span className={style.modelTitle}>
                  Key
                  <br />
                  Resources
                </span>
              </div>
            </Link>
          </article>
          <article className={style.modelContent}>
            <Link className={style.link} to="/proposition">
              <div id={style.modelProperty}>
                <img
                  className={style.modelImg}
                  src={"/images/value.jpg"}
                  alt=""
                />
                <span className={style.modelTitle}>
                  Value
                  <br />
                  Proposition
                </span>
              </div>
            </Link>
          </article>
          <article className={style.modelContent}>
            <Link className={style.link} to="/relationships">
              <div id={style.modelRelationship}>
                <img
                  className={style.modelImg}
                  src={"/images/customer.webp"}
                  alt=""
                />
                <span className={style.modelTitle}>
                  Customer
                  <br />
                  Relationships
                </span>
              </div>
            </Link>
            <Link className={style.link} to="/channel">
              <div id={style.modelChannel}>
                <img
                  className={style.modelImg}
                  src={"/images/channel.jpg"}
                  alt=""
                />
                <span className={style.modelTitle}>Channel</span>
              </div>
            </Link>
          </article>
          <article className={style.modelContent}>
            <Link className={style.link} to="/segments">
              <div id={style.modelSegment} title="segments">
                <img
                  className={style.modelImg}
                  src={"/images/segments.webp"}
                  alt=""
                />
                <span className={style.modelTitle}>
                  Customer
                  <br />
                  Segments
                </span>
              </div>
            </Link>
          </article>
          <article className={style.modelContent} id={style.modelStructure}>
            <Link className={style.link} to="/structure">
              <div className={style.modelStructure}>
                <img
                  className={style.modelImg}
                  src={"/images/cost.webp"}
                  alt=""
                />
                <span className={style.modelTitle}>
                  Cost
                  <br />
                  Structure
                </span>
              </div>
            </Link>
          </article>
          <article className={style.modelContent} id={style.modelScreams}>
            <Link className={style.link} to="/revenue">
              <div className={style.modelScreams}>
                <img
                  className={style.modelImg}
                  src={"/images/com.webp"}
                  alt=""
                />
                <span className={style.modelTitle}>
                  Revenue
                  <br />
                  Streams
                </span>
              </div>
            </Link>
          </article>
        </section>
      )}
    </>
  );
};

export default Model;
