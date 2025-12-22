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
    title: "Backend Developer",
    icon: <BackendIcon />,
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
      name: "Nestjs",
      icon: "/assets/tech/nestjs.svg",
      link: "https://nestjs.com/",
    },
    {
      name: "Spring Boot",
      icon: "/assets/tech/spring.svg",
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
    {
      name: "Ant design",
      icon: "/assets/tech/ant-design-dark-theme.svg",
      link: "https://ant.design/",
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
    {
      name: "Docker",
      icon: "/assets/tech/docker.svg",
      link: "https://www.docker.com/",
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
    {
      name: "Prisma",
      icon: "/assets/tech/prisma.svg",
      link: "https://www.prisma.io/",
    },

  ],
};

// CẬP NHẬT PHẦN EXPERIENCE THÀNH EDUCATION & CERTIFICATE
const experiences = [
  {
    title: "Intern FullStack Developer",
    company_name: "BitGroup",
    icon: "/assets/company/Bit Group.jfif", // Bạn nhớ thêm logo bitgroup vào folder assets
    iconBg: "#383E56",
    date: "Oct 2025 – Dec 2025",
    points: [
      "Project: Stadium Booking Platform & E-commerce.",
      "Tech Stack: Next.js, NestJS, TypeScript, PostgreSQL, Prisma.",
      "Designed complex DB schemas for Booking (Slots), E-commerce (Cart, Orders), and User management.",
      "Implemented RBAC Authentication (Admin, Owner, User) and developed RESTful APIs for booking/product operations."
    ],
  },
  {
    title: "Information Technology Student",
    company_name: "NongLam University",
    icon: "/assets/company/nlu-logo.jfif", // Bạn cần bỏ logo trường vào đây
    iconBg: "#383E56",
    date: "2021 - Oct 2025",
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
      "Enthusiastic Web Developer Intern with a solid academic foundation.",
    name: "Pham Trung Tin",
    designation: "FullStack Intern",
    company: "Portfolio",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
];

// CẬP NHẬT PHẦN PROJECTS TỪ CV
// CẬP NHẬT PHẦN PROJECTS THEO ĐÚNG THỨ TỰ TRONG CV
const projects = [
  {
    name: "Trello Clone",
    description:
      "Real-time task management app similar to Trello. Features include drag-and-drop tasks, light/dark theme support, WebSocket board sync, and full CRUD operations.",
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
    image: "/assets/projects/Project image 3.png",
    source_code_link: "https://github.com/tin2709/MyTrelloClone",
    deployed_link: "https://github.com/tin2709/MyTrelloClone",
  },
  {
    name: "Computer Room Management",
    description:
      "Management system for university computer labs with Role-based access (Admin/Teacher). Features include QR Code statistics, Chatbot integration, and Device tracking.",
    tags: [
      {
        name: "spring-boot",
        color: "green-text-gradient",
      },
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mysql",
        color: "pink-text-gradient",
      },
      {
        name: "google-auth",
        color: "yellow-text-gradient",
      },
    ],
    image: "/assets/projects/Project image 2.png",
    source_code_link:
      "https://github.com/tin2709/TieuLuanTotNghiepBackEnd",
    deployed_link:
      "https://github.com/tin2709/TieuLuanTotNghiepBackEnd",
  },
  {
    name: "Online Video Editor & AI",
    description:
      "Web-based video editor with AI subtitles. Features WebSocket progress tracking, AI Auto-transcription (Whisper) & Translation, Canvas-based styling, and background FFmpeg processing.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "python",
        color: "green-text-gradient",
      },
      {
        name: "ffmpeg",
        color: "pink-text-gradient",
      },
      {
        name: "redux",
        color: "orange-text-gradient",
      },
    ],
    // Bạn nhớ thêm ảnh dự án này vào thư mục assets và đổi tên file tương ứng nhé
    image: "/assets/projects/Project image.png", 
    source_code_link: "https://github.com/tin2709/DoAnCDWeb",
    deployed_link: "https://github.com/tin2709/DoAnCDWeb",
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
  "Web Developer",
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
