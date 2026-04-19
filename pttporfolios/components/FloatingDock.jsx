import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";

// Import các icon (bạn có thể thay đổi icon tùy ý từ folder assets/icons)
import GithubIcon from "./../public/assets/icons/github.svg";
import LinkedInIcon from "./../public/assets/icons/linkedin.svg";
// Giả định bạn có các icon này, nếu chưa có hãy dùng tạm text hoặc icon khác
import HomeIcon from "./../public/assets/icons/up-arrow.svg"; // Tạm dùng up-arrow làm home

const navItems = [
  { id: "hero", icon: <HomeIcon className="w-5 h-5" />, link: "#about" },
  { id: "work", icon: "💼", link: "#work" }, // Dùng Emoji nếu chưa có SVG
  { id: "skills", icon: "🤖", link: "#skills" },
  { id: "github", icon: <GithubIcon className="w-5 h-5" />, link: "https://github.com/tin2709", external: true },
  { id: "linkedin", icon: <LinkedInIcon className="w-5 h-5" />, link: "https://www.linkedin.com/in/ph%E1%BA%A1m-trung-t%C3%ADn-820478333/", external: true },
  { id: "resume", icon: "📄", link: "/document/PTTCVFullStack.pdf", external: true },
];

const FloatingDock = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Xử lý logic hiện ra khi lướt xuống cuối trang
  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight;
      const scrollTop = document.documentElement.scrollTop;
      const clientHeight = document.documentElement.clientHeight;

      // Hiện khi lướt xuống cách đáy khoảng 200px
      if (scrollTop + clientHeight >= scrollHeight - 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      initial={{ y: 100, x: "-50%", opacity: 0 }}
      animate={{ y: isVisible ? 0 : 100, x: "-50%", opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed bottom-10 left-1/2 z-50 flex items-center gap-4 px-6 py-3 
                 bg-black/40 backdrop-blur-lg border border-white/20 rounded-2xl shadow-2xl"
    >
      {navItems.map((item, index) => (
        <div key={item.id} className="flex items-center">
          <Link href={item.link} target={item.external ? "_blank" : "_self"}>
            <motion.div
              whileHover={{ 
                scale: 1.4, 
                y: -10,
                color: "#804dee" 
              }}
              className="text-white text-xl cursor-pointer flex items-center justify-center p-2 rounded-xl hover:bg-white/10 transition-colors"
            >
              {item.icon}
            </motion.div>
          </Link>
          
          {/* Vạch kẻ giữa (giữa icon thứ 3 và 4) */}
          {index === 2 && (
            <div className="w-[1px] h-8 bg-white/20 mx-2" />
          )}
        </div>
      ))}
    </motion.div>
  );
};

export default FloatingDock;
