import React from "react";
import style from "./structure.module.css";
import { AdvancedImage } from "@cloudinary/react";

const Structure = ({ cld }) => {
  const cost = cld.image("murbm/cost.jpg");
  const cost2 = cld.image("murbm/cost2.jpg");
  return (
    <section className={style.container}>
      <div className={style.banner}>
        <h1 className={style.bannerTitle}>
          <span className={style.title}>
            Cost Structure<br></br>
          </span>
          <span className={style.bannerSubTittle}>비용 관리</span>
          <br></br>
          <span className={style.bannerSubTxt}>
            비즈니스 모델을 운영하는 데서 발생하는 모든 비용을 의미한다.
          </span>
        </h1>
        <AdvancedImage cldImg={cost} className={style.bannerImg} />
      </div>
      <div className={style.content}>
        <AdvancedImage cldImg={cost2} className={style.contentImg} />
        <div className={style.describe}>
          <div className={style.first}>
            <div className={style.firstTitle}>
              <h2>비용 주도</h2>
            </div>
            <div className={style.firstDesc}>
              <span>
                비용 주도적 비즈니스 모델은 비용 절감에 최대한 초점을 맞춰야
                한다. 가능한 <br />한 최소 비용구조를 만들고 그를 유지하는 것이
                목적이며, 그러려면 저가 정책,
                <br /> 최대한의 자동화, 아웃소싱 확대 등 방법을 동원해야 한다.
                사우스웨스트, 이지
                <br />
                제트, 라이언에어 등 저가 항공사들은 비용 주도적 비즈니스 모델의
                대표적인 <br />
                예다.
              </span>
            </div>
          </div>
          <div className={style.sec}>
            <div className={style.secTitle}>
              <h2>가치 주도</h2>
            </div>
            <div className={style.secDesc}>
              <span>
                어떤 기업들은 비즈니스 모델을 설계할 때 비용보다는 가치 창조에
                더 초점을
                <br /> 맞춘다. 고급스러운 밸류 프로포지션과 고도의 맞춤서비스가
                이들 가치 주도
                <br />적 비즈니스 모델의 특징이다. 호화로운 시설과 전용서비스를
                제공하는 럭셔
                <br />리 호텔이 여기에 해당된다.
              </span>
            </div>
          </div>
          <div className={style.third}>
            <div className={style.thirdTitle}>
              <h2>고정비</h2>
            </div>
            <div className={style.thirdDesc}>
              <span>
                생산되는 제품/서비스 규모와 상관없이 소요되는 비용이다. 인건비,
                임대료, <br />
                물리적 생산시설 등이 해당된다. 제조업체는 고정비 비율이 높은
                것이 특징이다.
              </span>
            </div>
          </div>
          <div className={style.fourth}>
            <div className={style.fourthTitle}>
              <h2>변동비</h2>
            </div>
            <div className={style.fourthDesc}>
              <span>
                생산되는 제품/서비스 규모에 비례해 변동되는 비용이다.
                <br />
                뮤직페스티벌과 같은 비즈니스는 변동비의 비중이 크다.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Structure;
