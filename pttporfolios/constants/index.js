import GithubIcon from "./../public/assets/icons/github.svg";
import LinkedInIcon from "./../public/assets/icons/linkedin.svg";
import XIcon from "./../public/assets/icons/x.svg";
import InstagramIcon from "./../public/assets/icons/instagram.svg";
import FrontendIcon from "./../public/assets/icons/frontend.svg";
import LeaderShipIcon from "./../public/assets/icons/leadership.svg";
import ProblemSolvingIcon from "./../public/assets/icons/problem-solving.svg";
import FreelancerIcon from "./../public/assets/icons/freelance.svg";
import BackendIcon from "./../public/assets/icons/backend.svg";
import FullStackIcon from "./../public/assets/icons/full-stack.svg";

const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Education", // Đổi tên hiển thị trên menu cho hợp lý
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Software Developer",
    icon: <FullStackIcon />,
  },
  {
    title: "Frontend Developer",
    icon: <FrontendIcon />,
  },
  {
    title: "Problem Solving",
    icon: <ProblemSolvingIcon />,
  },
];

const technologies = {
  languages: [
    {
      name: "HTML5",
      icon: "/assets/tech/html5.svg",
      link: "https://html.spec.whatwg.org/multipage/",
    },
    {
      name: "CSS3",
      icon: "/assets/tech/css3.svg",
      link: "https://www.w3.org/Style/CSS/Overview.en.html",
    },
    {
      name: "JavaScript",
      icon: "/assets/tech/javascript.svg",
      link: "https://262.ecma-international.org/",
    },
    {
      name: "TypeScript",
      icon: "/assets/tech/typescript.svg",
      link: "https://www.typescriptlang.org/",
    },
    {
      name: "Java",
      icon: "/assets/tech/java.svg",
      link: "https://www.java.com/en/",
    },
  ],
  frameworks: [
    {
      name: "Next.js",
      icon: "/assets/tech/nextjs.svg",
      link: "https://nextjs.org/",
    },
    {
      name: "TailwindCSS",
      icon: "/assets/tech/tailwindcss.svg",
      link: "https://tailwindcss.com/",
    },
    {
      name: "Spring Boot", // Đã thêm từ CV
      icon: "/assets/tech/spring.svg", // Cần thêm file icon này
      link: "https://spring.io/projects/spring-boot",
    },
  ],
  libraries: [
    {
      name: "React",
      icon: "/assets/tech/react.svg",
      link: "https://react.dev/",
    },
    {
      name: "Three.js",
      icon: "/assets/tech/threejs.svg",
      link: "https://threejs.org/",
    },
    {
      name: "Framer-motion",
      icon: "/assets/tech/framer.svg",
      link: "https://www.framer.com/motion/",
    },
    {
      name: "Redux/Redux-toolkit",
      icon: "https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png",
      link: "https://redux.js.org",
    },
  ],
  tools: [
    {
      name: "Git",
      icon: "/assets/tech/git.svg",
      link: "https://git-scm.com/",
    },
    {
      name: "Github",
      icon: "/assets/icons/github.svg",
      link: "https://github.com/",
    },
    {
      name: "Postman",
      icon: "/assets/tech/postman.svg",
      link: "https://www.postman.com/",
    },
    {
      name: "Figma",
      icon: "/assets/tech/figma.svg",
      link: "https://www.figma.com/",
    },
  ],
  environments: [
    {
      name: "Node.js",
      icon: "/assets/tech/nodejs.svg",
      link: "https://nodejs.org/en",
    },
  ],
  databases: [
    {
      name: "MySQL",
      icon: "/assets/tech/my-sql.png",
      link: "https://www.mysql.com/",
    },
    {
      name: "PostgreSQL",
      icon: "/assets/tech/postgresql.png",
      link: "https://www.postgresql.org",
    },
    {
      name: "MongoDB",
      icon: "/assets/tech/mongodb.svg",
      link: "https://www.mongodb.com/",
    },
    {
      name: "Firebase",
      icon: "/assets/tech/firebase.svg",
      link: "https://firebase.google.com/",
    },
  ],
};

// CẬP NHẬT PHẦN EXPERIENCE THÀNH EDUCATION & CERTIFICATE
const experiences = [
  {
    title: "Information Technology Student",
    company_name: "NongLam University",
    icon: "/assets/company/nlu-logo.jfif", // Bạn cần bỏ logo trường vào đây
    iconBg: "#383E56",
    date: "2021 - Oct 2025 (Expected)",
    points: [
      "Solid academic foundation in core web technologies like HTML, CSS, and JavaScript.",
      "Hands-on experience in building user interfaces and web applications using React and Next.js.",
      "Soft Skills: Teamwork & Collaboration, Adaptability, Problem-solving.",
      "Attention to details and eager to apply foundational knowledge."
    ],
  },
  {
    title: "TOEIC Certificate (835/990)",
    company_name: "IIG Vietnam",
    icon: "/assets/company/toeic-logo.jfif", // Bạn cần bỏ logo TOEIC vào đây
    iconBg: "#E6DEDD",
    date: "2023 - 2025",
    points: [
      "Achieved TOEIC Score: 835.",
      "Ability to read and comprehend technical documentation in English.",
      "Effective communication in professional environments."
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Enthusiastic Frontend Developer Intern with a solid academic foundation.",
    name: "Pham Trung Tin",
    designation: "Frontend Intern",
    company: "Portfolio",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
];

// CẬP NHẬT PHẦN PROJECTS TỪ CV
const projects = [
  {
    name: "Trello Clone",
    description:
      "A full-stack, real-time web application similar to Trello. Features include drag-and-drop tasks, light/dark theme support, data import/export, and instant updates across boards using real-time synchronization.",
    tags: [
      {
        name: "next.js",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "typescript",
        color: "pink-text-gradient",
      },
      {
        name: "cypress",
        color: "orange-text-gradient",
      },
    ],
    image: "/assets/projects/trello.png", // Bạn cần lưu ảnh dự án tên trello.png
    source_code_link: "https://github.com/tin2709/MyTrelloClone",
    deployed_link: "https://github.com/tin2709/MyTrelloClone", // Nếu có link deploy thì thay vào
  },
  {
    name: "Computer Room Management",
    description:
      "A modern management website to control computer rooms with 3 roles: Admin, Teacher, Employee. Features JWT Auth, QRCode for statistics, and Chatbot integration for user support.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "springboot",
        color: "green-text-gradient",
      },
      {
        name: "mysql",
        color: "pink-text-gradient",
      },
      {
        name: "ant-design",
        color: "yellow-text-gradient",
      },
    ],
    image: "/assets/projects/room-management.png", // Bạn cần lưu ảnh dự án tên room-management.png
    source_code_link:
      "https://github.com/tin2709/TieuLuanTotNghiepBackEnd",
    deployed_link:
      "https://github.com/tin2709/TieuLuanTotNghiepBackEnd",
  },
  {
    name: "App Chat",
    description:
      "Real-time web chat using WebSocket/Firebase to send messages, GIFs, and files. Designed for better user experience with Google Auth, Dark/Light interface themes, and avatar customization.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: "/assets/projects/chat-app.png", // Bạn cần lưu ảnh dự án tên chat-app.png
    source_code_link: "https://github.com/Tintwentyseven/DoAnLapTrinhFE/tree/Tin",
    deployed_link: "https://github.com/Tintwentyseven/DoAnLapTrinhFE/tree/Tin",
  },
];

const socials = [
  {
    id: "github",
    icon: <GithubIcon />,
    link: "https://github.com/tin2709",
  },
  {
    id: "linkedin",
    icon: <LinkedInIcon />,
    link: "https://www.linkedin.com/in/ph%E1%BA%A1m-trung-t%C3%ADn-820478333/",
  },
];

const heroTexts = [
  "Frontend Developer Intern",
  500,
  "React/Next.js Enthusiast",
  500,
  "Information Technology Student",
  500,
  "Problem Solver",
  500,
];

export {
  navLinks,
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  socials,
  heroTexts,
};
