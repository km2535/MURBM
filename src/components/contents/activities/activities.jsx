import React from "react";
import style from "./activities.module.css";
import { AdvancedImage } from "@cloudinary/react";

const Activities = ({ cld }) => {
  const activity = cld.image("murbm/activity.webp");
  const activities = cld.image("murbm/activities.jpg");
  return (
    <section className={style.container}>
      <div className={style.banner}>
        <h1 className={style.bannerTitle}>
          <span className={style.title}>
            Key Activities<br></br>
          </span>
          <span className={style.bannerSubTittle}>핵심 활동</span>
          <br></br>
          <span className={style.bannerSubTxt}>
            기업이 비즈니스를 제대로 영위해나가기 위해서 꼭 해야 하는 중요한
            일들을 말한다.
          </span>
        </h1>
        <AdvancedImage cldImg={activity} className={style.bannerImg} />
      </div>
      <div className={style.content}>
        <AdvancedImage cldImg={activities} className={style.contentImg} />
        <div className={style.describe}>
          <div className={style.first}>
            <div className={style.firstTitle}>
              <h2>생산</h2>
            </div>
            <div className={style.firstDesc}>
              <span>
                우수한 품질의 제품을 설계, 제작, 운송하는 것과
                <br /> 관련이 있다. 생산 활동은 제조회사의 비즈니스
                <br /> 모델에서 가장 큰 비중을 차지한다.
              </span>
            </div>
          </div>
          <div className={style.sec}>
            <div className={style.secTitle}>
              <h2>문제해결</h2>
            </div>
            <div className={style.secDesc}>
              <span>
                이 활동은 고객이 처한 각각의 문제에 대한 <br />
                새로운 해결책을 찾아내는 것과 관련이 있다.
                <br />
                컨설팅회사, 병원, 기타 서비스 조직의 경영을 <br />
                위해서는, '문제해결'이라는 활동이 가장 중요
                <br />
                하다. 이런 조직의 비즈니스 모델 상에서는
                <br /> '지식 관리'는 물론 지속적인 훈련 같은 활동이 <br />
                필요하다.
              </span>
            </div>
          </div>
          <div className={style.third}>
            <div className={style.thirdTitle}>
              <h2>플랫폼 / 네트워크</h2>
            </div>
            <div className={style.thirdDesc}>
              <span>
                플랫폼을 핵심자원으로 설계된 비즈니스 모델은
                <br /> 플랫폼이나 네트워크와 관련된 핵심활동에 의해
                <br /> 지배된다. 네트워크와 중개 플랫폼, 소프트웨어,
                <br />
                심지어 브랜드도 플랫폼의 기능을 할 수 있다.
                <br />
                이베이의 비즈니스 모델은 이 기업의 플랫폼인
                <br /> eBay.com을 지속적으로 개발하고 유지하는 것에 <br />
                초점을 맞춘다. VISA의 비즈니스 모델은 매장, 고객
                <br />
                은행을위한 거래 플랫폼과 관련된 활동을 필요로
                <br />
                한다. MS의 비즈니스 모델은 윈도우즈라는 OS
                <br /> 플랫폼뿐 아니라 다른 공급자들의 소프트웨어와의
                <br /> 인터페이스 관리 활동을 포함한다.
                <br />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Activities;
