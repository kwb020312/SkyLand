import { alyak, facebook, openai, tiktok } from "../assets/images";
import {
  car,
  contact,
  css,
  estate,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  motion,
  mui,
  nextjs,
  nodejs,
  pricewise,
  react,
  redux,
  sass,
  snapgram,
  summiz,
  tailwindcss,
  threads,
  typescript,
} from "../assets/icons";

export const skills = [
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },
  {
    imageUrl: motion,
    name: "Motion",
    type: "Animation",
  },
  {
    imageUrl: mui,
    name: "Material-UI",
    type: "Frontend",
  },
  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: redux,
    name: "Redux",
    type: "State Management",
  },
  {
    imageUrl: sass,
    name: "Sass",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
];

export const experiences = [
  {
    title: "React 웹 애플리케이션 개발",
    company_name: "Tiktok 클론코딩",
    icon: tiktok,
    iconBg: "#383E56",
    date: "2023.02 - 2023.03",
    points: [
      "React.js 및 기타 관련 기술을 사용하여 웹 애플리케이션 개발 및 유지보수.",
      "사용자 경험을 위한 API 활용 및 모바일 활용성 증가를 위한 스타일 사용",
      "파일 업로드 기능을 구현하고, Video 태그의 autoplay, loop를 활용한 Tiktok 클로닝",
      "프로필 조회 및 게시물을 검색하고, 각 게시물에 좋아요 및 댓글 기능 활성화 쿼리",
    ],
  },
  {
    title: "React Native 앱 개발",
    company_name: "ApujiMK",
    icon: alyak,
    iconBg: "#383E56",
    date: "2020.09 - 2020.12",
    points: [
      "공공기관 API를 활용한 데이터 조회 및 사용자 검색어에 따른 의약품 결과 및 상세정보 반환",
      "지도 API를 활용하여 주변 약국을 조회하고, 응급 상황시 연락가능한 연락처 제공",
      "알약 정보를 확인하고, 사용자 리뷰를 통한 약품에 대한 무지함을 해소하고자 개발",
      "실시간 반응을 활용한 데이터 추가 및 검색결과 조회로 사용자 경험 증대",
    ],
  },
  {
    title: "AI 웹 애플리케이션 개발",
    company_name: "DALL-E",
    icon: openai,
    iconBg: "#E6DEDD",
    date: "2023.03 - 2023.04",
    points: [
      "Open AI 모델을 학습시켜, 사용자 쿼리에 따른 사진결과 반환 및 사용자 프롬프트 저장 학습",
      "학습 및 반환된 사진을 출력하여 1024 X 1024의 화질 JPEG 데이터를 저장하는 기능 구현",
      "커뮤니티를 생성하여, 특정 쿼리를 입력하여 반환된 이미지를 조회할 수 있는 기능을 제공",
      "URL을 주변 지인에게 공유하여, 학습 데이터 강화 및 정확한 정보를 추출할 수 있도록 학습",
    ],
  },
  {
    title: "Node.js 백엔드 개발",
    company_name: "facebook",
    icon: facebook,
    iconBg: "#E6DEDD",
    date: "2019. 12 - 2020.02",
    points: [
      "로그인 및 회원가입과 해당 유저의 로그인 기록을 유지하는 토큰을 생성하여 반환하는 백엔드 API 개발",
      "유저의 데이터 파일 (이미지, 동영상)을 변환하여 Base64 형태로 인코딩 된 URL을 저장하고 출력하는 API 개발",
      "커뮤니티를 생성하여 좋아요, 댓글 등 UNION Query 사용하여 다양한 테이블의 데이터를 조합하고 반환하는 API 개발",
      "유저 스토리 및 게시글 등 실시간 상호작용이 가능한 데이터를 보관하고, 유저 채팅을 Socket.io를 사용한 실시간 양방향 개발",
    ],
  },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/YourGitHubUsername",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/YourLinkedInUsername",
  },
];

export const projects = [
  {
    iconUrl: pricewise,
    theme: "btn-back-red",
    name: "Amazon Price Tracker",
    description:
      "Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.",
    link: "https://github.com/adrianhajdin/pricewise",
  },
  {
    iconUrl: threads,
    theme: "btn-back-green",
    name: "Full Stack Threads Clone",
    description:
      'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
    link: "https://github.com/adrianhajdin/threads",
  },
  {
    iconUrl: car,
    theme: "btn-back-blue",
    name: "Car Finding App",
    description:
      "Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.",
    link: "https://github.com/adrianhajdin/project_next13_car_showcase",
  },
  {
    iconUrl: snapgram,
    theme: "btn-back-pink",
    name: "Full Stack Instagram Clone",
    description:
      "Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.",
    link: "https://github.com/adrianhajdin/social_media_app",
  },
  {
    iconUrl: estate,
    theme: "btn-back-black",
    name: "Real-Estate Application",
    description:
      "Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.",
    link: "https://github.com/adrianhajdin/projects_realestate",
  },
  {
    iconUrl: summiz,
    theme: "btn-back-yellow",
    name: "AI Summarizer Application",
    description:
      "App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.",
    link: "https://github.com/adrianhajdin/project_ai_summarizer",
  },
];
