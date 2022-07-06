import React from "react";
import style from "./relationship.module.css";
import { AdvancedImage } from "@cloudinary/react";

const RelationShip = ({ cld }) => {
  const relationship = cld.image("murbm/relationship.jpg");
  const customer = cld.image("murbm/customer.jpg");
  return (
    <section className={style.container}>
      <div className={style.banner}>
        <h1 className={style.bannerTitle}>
          <span className={style.title}>
            Customer Relationship
            <br />
          </span>
          <span className={style.bannerSubTittle}>고객 관계</span>
          <br></br>
          <span className={style.bannerSubTxt}>
            특정한 고객 세그먼트와 어떤 형태의 관계를맺을 것인가를 의미한다.
          </span>
        </h1>
        <AdvancedImage cldImg={customer} className={style.bannerImg} />
      </div>
      <div className={style.content}>
        <AdvancedImage cldImg={relationship} className={style.contentImg} />
        <div className={style.describe}>
          <div className={style.first}>
            <div className={style.firstTitle}>
              <h2>물적 자원</h2>
            </div>
            <div className={style.firstDesc}>
              <span>
                생산시설, 건물, 자동차, 기계, 시스템, 판매시스템
                <br /> 네트워크 등, 월마트나 아마존 닷컴 같은 유통기업은
                <br /> 대개 자본집약적인 물적 자원에 크게 의존한다.
                <br /> 월마트는 매장과 물류 인프라라는 거대한 글로벌
                <br /> 네트워크를 가지고 있다. 아마존 닷컴 역시 엄청난<br></br>
                규모의 IT 장비와 창고, 물류 인프라를 보유하고 있다.
              </span>
            </div>
          </div>
          <div className={style.sec}>
            <div className={style.secTitle}>
              <h2>지적 자산</h2>
            </div>
            <div className={style.secDesc}>
              <span>
                브랜드, 독점적 지식, 특허나 저작권, 파트너십 <br />
                고객 데이터베이스 등 지적 자산은 비즈니스
                <br />
                모델을 구성하는 점점 더 중요한 핵심자원이 되어
                <br />
                가고 있다. 지적 자산은 개발 하기는 어렵지만
                <br />
                일단 개발에 성공하면 상당한 부가가치를 낳는다.
                <br />
              </span>
            </div>
          </div>
          <div className={style.third}>
            <div className={style.thirdTitle}>
              <h2>인적 자원 </h2>
            </div>
            <div className={style.thirdDesc}>
              <span>
                모든 기업이 인적 자원을 필요로 하지만, 특히 이 요소가
                <br /> 두드러지는 비즈니스 모델이 있다.
                <br /> 지식집약적이고 창조적인 산업 분야에서 인적자원은
                <br />
                특히 중요하다. 제약기업인 노바티스는 경험이 풍부한
                <br />
                과학자 집단과 숙련된 대규모 영업팀을 기반으로 함으
                <br /> 로써, 인적 자원에 크게 의존한다.
              </span>
            </div>
          </div>
          <div className={style.fourth}>
            <div className={style.fourthTitle}>
              <h2>재무 자원</h2>
            </div>
            <div className={style.fourthDesc}>
              <span>
                비즈니스 모델에 따라 현금이나 신용한도, 핵심 인력을
                <br /> 유인하기 위한 스톡옵션 등 재무적 자원이나 보장이
                <br />
                필요하다. 통신기기 제조업체 에릭슨은 재무적 자원을
                <br />
                효과적으로 활용하고 있다. 그들은 자본시장에서 자금
                <br />
                빌려 그중 일부로 장비 구매 고객들이게 벤터 파이
                <br /> 낸싱을 제공함으로써 경재장들보다 우선적으로 주문을
                <br />
                확보한다.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RelationShip;
