import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";

const InfoBox = ({ text, link, btnText }) => (
  <div className="info-box">
    <p className="font-medium sm:text-xl text-center break-keep">{text}</p>
    <Link to={link} className="neo-brutalism-white neo-btn">
      {btnText}
      <img src={arrow} className="w-4 h-4 object-contain" />
    </Link>
  </div>
);

const renderContent = {
  1: (
    <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
      반가워요 🖐, 저는 <span className="font-semibold">Chobby</span>입니다.
      <br />
      FrontEnd 개발을 하고있어요!
    </h1>
  ),
  2: (
    <InfoBox
      text={
        "실무에서 경험한 다양한 영역의 숙련도를 바탕으로 많은 포트폴리오를 제작하며, 알고리즘 풀이도 진행하고있어요!"
      }
      link={"/about"}
      btnText={"스킬 보러가기"}
    />
  ),
  3: (
    <InfoBox
      text={
        "웹, 모바일에서 사용될 미래 기술인 3D 와 AI 기술에 관심을 갖고 공부하고있어요!"
      }
      link={"/projects"}
      btnText={"프로젝트 보러가기"}
    />
  ),
  4: (
    <InfoBox
      text={"더 이야기해보고 싶어요! 메일로 연락주세요!"}
      link={"/contact"}
      btnText={"이야기 하러가기"}
    />
  ),
};

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};

export default HomeInfo;
