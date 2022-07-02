import React from "react";
import style from "./partner.module.css";
const Partner = (props) => {
  return (
    <section className={style.container}>
      <div className={style.banner}>
        <h1 className={style.bannerTitle}>
          <span className={style.title}>
            Key Partner<br></br>
          </span>
          <span className={style.bannerSubTittle}>핵심 파트너십</span>
          <br></br>
          <span className={style.bannerSubTxt}>
            비즈니스 모델을 원활히 작동시켜줄 수 있는 ‘공급자 - 파트너’ 간의
            네트워크를 말한다.
          </span>
        </h1>
        <img
          className={style.bannerImg}
          src="/images/partnership.webp"
          alt=""
        />
      </div>
      <div className={style.content}>
        <img
          className={style.contentImg}
          src="/images/partnership.jpeg"
          alt=""
        />
        <div className={style.describe}>
          <div className={style.first}>
            <div className={style.firstTitle}>
              <h2>최적화와 규모의 경제</h2>
            </div>
            <div className={style.firstDesc}>
              <span>
                파트너십 혹은 구매-공급자 관계의 가장 기본적인
                <br /> 형태는 자원이나 활동의 배분을 최적화 하기 위해 설계
                <br />
                된다. 최적화, 규모의 경제를 위한 파트너십의 목적은
                <br /> 대개 비용 절감, 자원이나 인프라 공류를 위한 목적도
                <br /> 있다.
              </span>
            </div>
          </div>
          <div className={style.sec}>
            <div className={style.secTitle}>
              <h2>리스크/불확실성의 감소</h2>
            </div>
            <div className={style.secDesc}>
              <span>
                파트너십은 불확실성이 상존하는 경쟁환경에서 <br />
                리스크를 줄이는 데 도움을 줄 수 있다. <br />
                블루레이는 세계 일류의 가전제품, <br />
                PC, 미디어 기업들이 공동으로 개발한 <br />
                광 디스크 포맷 표준이다. 협력해서 블루레이 <br /> 기술을 시장에
                도입 했지만, 그들은 또 한편 <br /> 블루레이 제품을 판매하기 위해
                제각기 경쟁한다.
              </span>
            </div>
          </div>
          <div className={style.third}>
            <div className={style.thirdTitle}>
              <h2>자원/활동의 획득</h2>
            </div>
            <div className={style.thirdDesc}>
              <span>
                비즈니스 모델에 필요한 모든 자원을 보유하거나
                <br /> 모든 활동을 자체적으로 수행하는 기업은 거의 없다.
                <br /> 오히려 기업은 다른 기업을 이용해 자원이나 활동을
                <br />
                획득함으로써 능력을 확장한다. <br />
                이런 파트너십에는 지식이나 라이센스를 얻기 위한 목적,
                <br /> 혹은 고객에게 쉽게 접근하기 위한 목적 <br />
                등도 포함된다. 예를 들어 휴대전화 제조업체는 <br />
                단말기 운용시스템을 자체적으로 개발하는 대신,
                <br /> 라이센스를 활용한다. 보험회사 역시 상품을
                <br /> 판매하기 위해 자체적으로 영업조직을 구성하지
                <br /> 않고 외부 자원을 활용할 수 있다.
                <br /> 은행에 영업 업무를 아웃소싱하는 뱅커슈랑스가 그 예다.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partner;
