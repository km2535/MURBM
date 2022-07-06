import React from "react";
import style from "./revenue.module.css";
import { AdvancedImage } from "@cloudinary/react";

const Revenue = ({ cld }) => {
  const com = cld.image("murbm/com.jpg");
  const revenue2 = cld.image("murbm/revenue2.jpg");
  return (
    <section className={style.container}>
      <div className={style.banner}>
        <h1 className={style.bannerTitle}>
          <span className={style.title}>
            Revenue Streams<br></br>
          </span>
          <span className={style.bannerSubTittle}>수익 구조</span>
          <br></br>
          <span className={style.bannerSubTxt}>
            수익원은 기업이 각 고객 세글먼트로부터 창출하는 현금을 의미한다.
          </span>
        </h1>
        <AdvancedImage cldImg={com} className={style.bannerImg} />
      </div>
      <div className={style.content}>
        <AdvancedImage cldImg={revenue2} className={style.contentImg} />
        <div className={style.describe}>
          <div className={style.first}>
            <div className={style.firstTitle}>
              <h2>물품 판매</h2>
            </div>
            <div className={style.firstDesc}>
              <span>
                전통적으로 가장 일반화된 수익원이 바로 자사가 보유한 물리적
                상품의 소유
                <br />
                권을 판매하는 것이다. 아마존닷컴은 온라인상으로 책, 음반뿐
                아니라 가전제
                <br />품 등 수많은 것들을 판매한다. 피아트는 자동차를 파는데
                무료 시승차, 중고차
                <br />, 심지어 파손된 차량까지도 판매한다.
              </span>
            </div>
          </div>
          <div className={style.sec}>
            <div className={style.secTitle}>
              <h2>이용료</h2>
            </div>
            <div className={style.secDesc}>
              <span>
                특정한 서비스를이용하게 함으로써 발생하는 수익원이다. 더 많이
                이용하면
                <br /> 더 많은 돈을 지불한다. 통신사는 사용 시간에 따라
                전화요금을 부과하며, <br />
                호텔은 객실 이용 일수에 따라 요금을 부과한다. 택배회사는 배달
                건별 요금을
                <br /> 받는다.
              </span>
            </div>
          </div>
          <div className={style.third}>
            <div className={style.thirdTitle}>
              <h2>가입비</h2>
            </div>
            <div className={style.thirdDesc}>
              <span>
                이 수익원은 서비스에 대한 지속적인 이용권한을 판매함으로써
                창출된다. <br />
                헬스클럽은 시설 이용에 대한 대가로 회원들에게 월간 혹은 연간
                가입비를
                <br /> 받는다. 인터넷게임 워크래프트 온라인은 유저들에게 월
                이용료를 받는다.
                <br /> 노키아의 음원 서비스 이용자들은 뮤직라이브러리 가입비를
                지불한다.
              </span>
            </div>
          </div>
          <div className={style.fourth}>
            <div className={style.fourthTitle}>
              <h2>라이센싱</h2>
            </div>
            <div className={style.fourthDesc}>
              <span>
                이 수익원은 고객들에게 지적재산권의 사용을 허가한 후 사용료를
                받음으로써 <br />
                창출된다. 라이센싱은 권리자들이 제품을 생산하거나 서비스를
                제공하지 않고도
                <br /> 권리자들이 제품을 생산하거나 서비스를 제공하지 않고도
                지적재산권으로부터 <br />
                수익이 창출될 수 있도록 해준다. 흔히 컨텐츠를 생산한 이들이
                저작권을 보유하고 <br />제 3자에게 전송권을 판매하는
                미디어산업에서 볼 수 있다. 기술 분야에서도 특허권
                <br />
                자들이 다른 기업에 사용권을 부여함으로써 사용료를 받는다.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Revenue;
