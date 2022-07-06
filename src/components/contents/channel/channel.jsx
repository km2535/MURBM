import React from "react";
import style from "./channel.module.css";
import { AdvancedImage } from "@cloudinary/react";

const Channel = ({ cld }) => {
  const channel2 = cld.image("murbm/channel2.jpg");
  const channel3 = cld.image("murbm/channel3.jpg");
  return (
    <section className={style.container}>
      <div className={style.banner}>
        <h1 className={style.bannerTitle}>
          <span className={style.title}>
            Channel<br></br>
          </span>
          <span className={style.bannerSubTittle}>소통</span>
          <br></br>
          <span className={style.bannerSubTxt}>
            기업이 고객 세그먼트에게 가치를 제안하기 위해 커뮤니케이션을 하고
            상품이나 서비스를 전달하는 방법을 말한다.
          </span>
        </h1>
        <AdvancedImage cldImg={channel2} className={style.bannerImg} />
      </div>
      <div className={style.content}>
        <AdvancedImage cldImg={channel3} className={style.contentImg} />
        <div className={style.describe}>
          <div className={style.first}>
            <div className={style.firstTitle}>
              <h2>이해도</h2>
            </div>
            <div className={style.firstDesc}>
              <span>
                상품이나 서비스에 대한 고객의 이해도를 어떻게 끌어올릴 것인가?
              </span>
            </div>
          </div>
          <div className={style.sec}>
            <div className={style.secTitle}>
              <h2>평가</h2>
            </div>
            <div className={style.secDesc}>
              <span>
                고객이 가치 제안을 제대로 평가할 수 있도록 어떻게 도울 것인가?
              </span>
            </div>
          </div>
          <div className={style.third}>
            <div className={style.thirdTitle}>
              <h2>구매</h2>
            </div>
            <div className={style.thirdDesc}>
              <span>
                어떻게 하면 고객이 더욱 원활하게 상품이나 서비스를 구매하게 할
                것인가?
              </span>
            </div>
          </div>
          <div className={style.fourth}>
            <div className={style.fourthTitle}>
              <h2>전달</h2>
            </div>
            <div className={style.fourthDesc}>
              <span>어떤 방법으로 고객에게 가치 제안을 전달할 것인가?</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Channel;
