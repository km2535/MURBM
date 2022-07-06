import React from "react";
import style from "./segments.module.css";
import { AdvancedImage } from "@cloudinary/react";

const Segments = ({ cld }) => {
  const segments3 = cld.image("murbm/segments3.jpg");
  const segments2 = cld.image("murbm/segments2.jpg");
  return (
    <section className={style.container}>
      <div className={style.banner}>
        <h1 className={style.bannerTitle}>
          <span className={style.title}>
            Customer Segments<br></br>
          </span>
          <span className={style.bannerSubTittle}>고객 관리</span>
          <br></br>
          <span className={style.bannerSubTxt}>
            '고객 세그먼트'라는 빌딩 블록은 기업이 제각기 얼마나 상이한 유형의
            사람들 혹은 조직을 겨냥하는지를 규정한다.
          </span>
        </h1>
        <AdvancedImage cldImg={segments3} className={style.bannerImg} />
      </div>
      <div className={style.content}>
        <AdvancedImage cldImg={segments2} className={style.contentImg} />
        <div className={style.describe}>
          <div className={style.first}>
            <div className={style.firstTitle}>
              <h2>매스 마켓</h2>
            </div>
            <div className={style.firstDesc}>
              <span>
                비즈니스 모델의 초점을 매스마켓에 맞추게 된다면, 고객
                <br /> 세그먼트를 구분할 필요가 없다. 가치 제안과 유통 채널,
                <br /> 고객관계 같은 구성요소들 역시 대체적으로 비슷한 니즈와
                <br /> 문제를 안은 하나의 거대한 타깃그룹에 초점을 맞춘다.
                <br /> 가전제품 분야가 흔히 그렇가.<br></br>
              </span>
            </div>
          </div>
          <div className={style.sec}>
            <div className={style.secTitle}>
              <h2>틈새시장</h2>
            </div>
            <div className={style.secDesc}>
              <span>
                비즈니스 모델이 틈새시장을 겨냥한 것이라면, 특화되고
                <br />
                전문화된 고객 세그먼트에 상품이나 서비스를 제공하게 된다.
                <br />
                그러므로 가치 제안과 유통채널, 고객관계 모두 틈새시장의
                <br />
                특화된 요구에 맞춰진다. 이 비즈니스 모델은 '공급자-바이어'
                <br />
                관계에서 쉽게 볼 수 있다. 예를 들면 자동차부품 공급자들은
                <br />
                메이저 자동차 생산업체의 구매에 거의 전적으로 의존한다.
              </span>
            </div>
          </div>
          <div className={style.third}>
            <div className={style.thirdTitle}>
              <h2>복합적인 세그먼트가 혼재되어 있는 시장</h2>
            </div>
            <div className={style.thirdDesc}>
              <span>
                복합적인 고객 비즈니스 모델을 갖춘 기업은 완전히 다른
                <br /> 니즈와 문제점, 즉 서로 전혀 연관이 없는 서로 다른 세그
                <br /> 먼트에게 서비스를 제공하기도 한다. 예를 들어 2006년
                <br /> 아마존닷컴은 소매 비즈니스에 주력하던 기존의 비즈니스
                <br /> 모델을 다각화하기로 결정한다. '클라우드 컴퓨팅', 즉
                서버를
                <br />
                통해 데이터 저장 등을 포함한 IT 서비스를 제공하기로 한 것이다.
              </span>
            </div>
          </div>
          <div className={style.fourth}>
            <div className={style.fourthTitle}>
              <h2>멀티사이드 시장</h2>
            </div>
            <div className={style.fourthDesc}>
              <span>
                어떤 조직은 두 개 이상의 개별적인 타깃 그룹을 대상으로 심는다.
                <br /> 예컨대, 신용카드 업체는 신용카드를 사용하는 개인 고객과
                신용카드로
                <br /> 결제를 해주는 영업점 고객을 동시에 만족시켜야 한다. 무료
                신문을 제공
                <br /> 하는 기업의 역시 관고주들이 혹할 만한 많은 독자층을
                확보해야 함과 동시 <br /> 에 광고주들로부터 신문 제작과 배포에
                필요한 자금을 조달해야 한다.
                <br /> 이 두 가지 이상의 세그먼트가 서로 밀접하게 영향이
                미치므로 이런 종류의 <br /> 비즈니스 모델을 원활하게 추진하려면
                어느 하나 소홀히 할 수 없다. <br /> 따라서 이런 세그먼트 유형을
                멀티사이드 플랫폼이라고 지칭한다.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Segments;
