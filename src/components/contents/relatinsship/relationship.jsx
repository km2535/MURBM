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
              <h2>개별 어시스트</h2>
            </div>
            <div className={style.firstDesc}>
              <span>
                사람이 직접하는 상호교류가 필요한 방식이다. 판매를 할<br /> 때
                혹은 구매를 한 이후에 고객에게 직접적으로 도움을 줄 <br />수
                있도록 담당자가 응대하는 것이다. 판매직원, 콜센터 <br />
                상담원을 통하거나 이메일과 같은 간접 수단을 이용할 수 <br />도
                있다.
              </span>
            </div>
          </div>
          <div className={style.sec}>
            <div className={style.secTitle}>
              <h2>매우 헌신적인 개별 어시스트</h2>
            </div>
            <div className={style.secDesc}>
              <span>
                고객별로 전담인력을 두어 헌신적으로 응대하게 하는 방식이다.{" "}
                <br />
                가장 깊고 친밀한 형태의 관계를 나타내며, 대개 오랜 기간 유지
                <br />
                된다. 프라이빗 뱅킹 서비스에서 전담직원이 자산이 많은 고객을
                <br />
                응대하는 방식을 떠올리면 된다. 다른 비즈니스 영역에서돌 핵심
                <br />
                고객 관리자가 VIP 고객과 개인적인 관계를 유지하는 형태를 많이
                <br />
                발견 할 수 있다.
              </span>
            </div>
          </div>
          <div className={style.third}>
            <div className={style.thirdTitle}>
              <h2>자동화 서비스</h2>
            </div>
            <div className={style.thirdDesc}>
              <span>
                이 방식은 조금은 더 섬세한 셀프서비스 방식과 자동화 프로세스를
                혼합한
                <br /> 것이다. 예를 들어 개인별 온라인 프로파일을 통해 고객에게
                맞춤형 서비스 <br />를 제공한다. 개별 고객의 특징을 인식해
                주문을 할 수 있게 해주거나 거래 <br />
                관련 정보를 제공하는 자동화 서비스도 가능하다. 취향별 도서나
                영화를 추천
                <br />
                해주는 서비스처럼, 제대로만 된다면 개별 어시스트와 유사한 효과를
                낼 수<br /> 있다.
              </span>
            </div>
          </div>
          <div className={style.fourth}>
            <div className={style.fourthTitle}>
              <h2>커뮤니티</h2>
            </div>
            <div className={style.fourthDesc}>
              <span>
                기업들은 점점 더 활발하게 기존 고객이나 잠재고객과 밀접한 관계를
                맺기
                <br /> 위한 방법으로 유저 커뮤니티를 활용하고 있다. 유저들은
                온라인 커뮤니티 <br />
                등을 통해 지식을 교환하고 서로의 문제를 해결해주는 데 도움을
                주기도 한<br />
                다. 기업의 입장에서는 커뮤니티를 통해 고객을 더 잘 이해할 수
                있다. 거대 <br />
                제약회사 글락소스미스클라인은 처방전이 필요 없는 체중감량제
                알리를 출<br />시 했을 때 전용 온라인 커뮤니티를 개설했다. 성인
                비만환자들이 직면한 어<br />
                려움에대한 이해를 높임으로써 고객의 기대에 더욱 활발히
                부응하고자 한 노<br />
                력이다.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RelationShip;
