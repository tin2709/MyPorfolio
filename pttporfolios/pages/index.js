import { useEffect, useState } from "react";
import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  StarsCanvas,
  Tech,
  Works,
  FloatingDock,
  OpenSource,
} from "@/components";
import HeroBackground from "@/components/HeroBackground";
import EarthContainer from "@/components/EarthContainer";
import PlayerContainer from "@/components/PlayerContainer";
import UpArrow from "./../public/assets/icons/up-arrow.svg";
import Services from "@/components/Services";

// Đổi tên từ App thành Portfolio để tránh trùng tên với file _app.js (tốt cho debug)
export default function Portfolio({ loading }) {
  // --- DÒNG QUAN TRỌNG ĐÃ THÊM ĐỂ SỬA LỖI ---
  const [showPortal, setShowPortal] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <main className="relative z-0 w-full h-full">
      <div className=" bg-cover bg-no-repeat bg-center">
        <Navbar />
        <HeroBackground />
        <Hero loading={loading} isMobile={isMobile} />
      </div>

      <section className="relative z-0 flex md:flex-row flex-col-reverse w-full h-full overflow-hidden">
        <About />
        {!isMobile && <PlayerContainer isMobile={isMobile} />}
      </section>

      <Services />
      <Experience />
      <Tech />
      <Works />
      <OpenSource />
      <section className="relative z-0 flex md:flex-row justify-between flex-col-reverse w-full h-full overflow-x-hidden sm:p-8 p-2 pb-8">
        <Contact />
        <EarthContainer isMobile={isMobile} />
        <StarsCanvas />
      </section>

      {/* Nút Back to Top */}
      <button
        onClick={() => window.scrollTo({ top: 0, left: 0, behavior: "smooth" })}
        className="fixed md:w-10 md:h-10 h-8 w-8 p-2 bottom-8 md:right-10 right-8 z-40 text-center text-secondary backdrop-filter backdrop-blur-xl bg-opacity-20 bg-tertiary rounded-lg hover:scale-110 transition-all duration-300"
      >
        <UpArrow />
      </button>

      {/* 2. Nút kích hoạt Portal (TARDIS) nằm ở dưới cùng bên trái */}
      <button
        onClick={() => setShowPortal(true)}
        className="fixed bottom-8 left-8 z-50 w-18 h-16 transition-transform hover:scale-110 active:scale-95"
      >
        <img
          src="https://brittanychiang.com/_next/image?url=%2Fimages%2Ftardis%2Frotate.gif&w=256&q=75"
          alt="Portal Trigger"
          className="w-full h-full object-contain"
        />
      </button>

      {/* 3. Lớp Overlay Portal khi click */}
      {showPortal && (
        <div className="portal-overlay" onClick={() => setShowPortal(false)}>

          {/* PHẢI CÓ 5 THẺ DIV NÀY THÌ MỚI CÓ HIỆU ỨNG VÒNG XOÁY */}
          <div className="wobble-background">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>

          {/* Nội dung Grid nằm trên lớp vòng xoáy */}
          <div className="portal-content" onClick={(e) => e.stopPropagation()}>
            <h2 className="portal-title">Looking for a different site? Go back in time...</h2>

            <div className="screenshot-grid">
              {/* Link ảnh v1, v2... nếu bị lỗi icon gạch chéo là do link ảnh của bạn chưa đúng,
            bạn hãy thay bằng link ảnh thật trong máy của bạn hoặc link khác */}
              <a href="#" className="screenshot-item">
                <img src="https://brittanychiang.com/v1.png" alt="v1" />
              </a>
              <a href="#" className="screenshot-item">
                <img src="https://brittanychiang.com/v2.png" alt="v2" />
              </a>
              <a href="#" className="screenshot-item">
                <img src="https://brittanychiang.com/v3.png" alt="v3" />
              </a>
              <a href="#" className="screenshot-item">
                <img src="https://brittanychiang.com/v4.png" alt="v4" />
              </a>
            </div>

            <button onClick={() => setShowPortal(false)} className="close-btn">
              Close Portal
            </button>
          </div>
        </div>
      )}
      <FloatingDock />

    </main>
  );
}
