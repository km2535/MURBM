import React from "react";
import style from "./proposition.module.css";
import { AdvancedImage } from "@cloudinary/react";

const Proposition = ({ cld }) => {
  const value = cld.image("murbm/value.jpg");
  const coin = cld.image("murbm/coin.jpg");
  return (
    <section className={style.container}>
      <div className={style.banner}>
        <h1 className={style.bannerTitle}>
          <span className={style.title}>
            Value Proposition<br></br>
          </span>
          <span className={style.bannerSubTittle}>가치 제안</span>
          <br></br>
          <span className={style.bannerSubTxt}>
            특정한 고객 세그먼트가 필요로 하는 가치를 창조하기 위한 상품이나
            서비스의 조합이 바로 '벨류 프로포지션'이다.
          </span>
        </h1>
        <AdvancedImage cldImg={value} className={style.bannerImg} />
      </div>
      <div className={style.content}>
        <AdvancedImage cldImg={coin} className={style.contentImg} />
        <div className={style.describe}>
          <div className={style.first}>
            <div className={style.firstTitle}>
              <h2>새로움</h2>
            </div>
            <div className={style.firstDesc}>
              <span>
                이전까지는 아무도 제시하지 않았기 때문에 필요한지 조차
                <br /> 몰랐지만, 전적으로 새로운 니즈를 찾아내 충족시켜주는
                <br /> 가치 제안이다. 늘 그런 것은 아니지만 대부분 첨단 기술과
                <br /> 관련이 돼 있다. 이동통신아라는 전혀 새로운 분야를 형성한
                <br /> 휴대전화가 그런 예가 될 것이다.<br></br>
              </span>
            </div>
          </div>
          <div className={style.sec}>
            <div className={style.secTitle}>
              <h2>퍼포먼스</h2>
            </div>
            <div className={style.secDesc}>
              <span>
                제품/서비스 퍼포먼스를 향상시키는 것 역시 가치를 <br />
                창조해내는 일반적이고도 전형적인 방법이였다. pc 분야는
                <br />
                끊임없이 성능이 개선된 제품을 양산함으로써, 퍼포먼스라는
                <br />
                요소에 거의 전적으로 의존한 시장이다. 하지만 여기에는 늘
                <br />
                한계가 존재한다. pc보급이 일반화된 지금은 더 빠르고 용량이
                <br />
                크고 그래픽이 향상된 pc들이 지속적으로 출시된다 해도
                <br />
                비약적인 수요 창출은 불가능해졌다.
              </span>
            </div>
          </div>
          <div className={style.third}>
            <div className={style.thirdTitle}>
              <h2>커스터마이징</h2>
            </div>
            <div className={style.thirdDesc}>
              <span>
                제품/서비스를 개별 고객이나 세그먼트의 특화된 요구에
                <br /> 딱 맞춤으로써 새로운 가치를 창조할 수도 있다.
                <br /> 특히 최근 몇 년가 매스 커스터마이징이나 코-크레이션
                <br />
                이라는 개념이 매우 중요해졌다. 이런 방식을 취할 경우
                <br />
                고객 특성에 맞춘 상품이나 서비스를 제공하면서도 동시에
                <br /> '규모의 경제'의 이점도 누릴 수 있다.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Proposition;
