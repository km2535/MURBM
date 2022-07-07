import React from "react";
import { Link } from "react-router-dom";
import style from "./model.module.css";
import { AdvancedImage } from "@cloudinary/react";

const Model = ({ view, cld }) => {
  const activity = cld.image("murbm/activity.webp");
  const partnership = cld.image("murbm/partnership2.webp");
  const resource = cld.image("murbm/resource.png");
  const value = cld.image("murbm/value.jpg");
  const segments = cld.image("murbm/segments.webp");
  const com = cld.image("murbm/com.webp");
  const cost = cld.image("murbm/cost.webp");
  const customer = cld.image("murbm/customer.webp");
  const channel = cld.image("murbm/channel.jpg");

  return (
    <>
      <section
        id={view ? style.viewModel : style.hiddenModel}
        className={style.modelContainer}
      >
        <article className={style.modelContent}>
          <Link className={style.link} to="/partner">
            <div id={style.modelPartner}>
              <AdvancedImage cldImg={partnership} className={style.modelImg} />
              <span className={style.modelTitle}>
                Key
                <br />
                Partner
              </span>
            </div>
          </Link>
        </article>
        <article className={style.modelContent} id={style.contentTwo}>
          <Link className={style.link} to="/activities">
            <div id={style.modelActivities}>
              <AdvancedImage cldImg={activity} className={style.modelImg} />
              <span className={style.modelTitle}>
                Key
                <br />
                Activities
              </span>
            </div>
          </Link>
          <Link className={style.link} to="/resources">
            <div id={style.modelResource}>
              <AdvancedImage cldImg={resource} className={style.modelImg} />
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
              <AdvancedImage cldImg={value} className={style.modelImg} />
              <span className={style.modelTitle}>
                Value
                <br />
                Proposition
              </span>
            </div>
          </Link>
        </article>
        <article className={style.modelContent} id={style.contentTwo}>
          <Link className={style.link} to="/relationships">
            <div id={style.modelRelationship}>
              <AdvancedImage cldImg={customer} className={style.modelImg} />
              <span className={style.modelTitle}>
                Customer
                <br />
                Relationships
              </span>
            </div>
          </Link>
          <Link className={style.link} to="/channel">
            <div id={style.modelChannel}>
              <AdvancedImage cldImg={channel} className={style.modelImg} />
              <span className={style.modelTitle}>Channel</span>
            </div>
          </Link>
        </article>
        <article className={style.modelContent}>
          <Link className={style.link} to="/segments">
            <div id={style.modelSegment} title="segments">
              <AdvancedImage cldImg={segments} className={style.modelImg} />
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
              <AdvancedImage cldImg={cost} className={style.modelImg} />
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
              <AdvancedImage cldImg={com} className={style.modelImg} />
              <span className={style.modelTitle}>
                Revenue
                <br />
                Streams
              </span>
            </div>
          </Link>
        </article>
      </section>
    </>
  );
};

export default Model;
