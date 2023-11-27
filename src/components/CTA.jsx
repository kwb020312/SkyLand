import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="cta">
      <p className="cta-text">맘에 드는 프로젝트가 있나요?</p>
      <br className="sm:block hidden" />
      다음엔 같이 만들어봐요!
      <Link to={"/contact"} className="btn">
        연락하기
      </Link>
    </section>
  );
};

export default CTA;
