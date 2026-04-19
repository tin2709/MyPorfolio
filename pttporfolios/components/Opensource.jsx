import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";

const OpenSource = () => {
  const [mounted, setMounted] = useState(false);
  const [data2026, setData2026] = useState([]);
  const [total2026, setTotal2026] = useState(0);
  const [loading, setLoading] = useState(true);

  const username = "tin2709";
  const levelColors = ["#161b22", "rgba(0, 240, 255, 0.2)", "rgba(0, 240, 255, 0.5)", "rgba(0, 240, 255, 0.8)", "#00f0ff"];
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  useEffect(() => {
    setMounted(true);
    fetch(`https://github-contributions-api.jogruber.de/v4/${username}`)
      .then((res) => res.json())
      .then((resData) => {
        const filtered = resData.contributions.filter((d) => d.date.startsWith("2026"));
        setData2026(filtered);
        setTotal2026(resData.total["2026"] || 0);
        setLoading(false);
      })
      .catch((err) => console.error("GitHub API Error:", err));
  }, []);

  if (!mounted || loading) {
    return <div className="h-[600px] flex items-center justify-center text-white font-bold text-xl">Loading Open Source Data...</div>;
  }

  return (
    <section className="sm:px-16 px-6 sm:py-16 py-10 max-w-7xl mx-auto relative z-0" id="opensource">
      {/* Phần Tiêu đề và Đoạn Text bạn vừa yêu cầu */}
      <motion.div variants={textVariant()} initial="hidden" whileInView="show" viewport={{ once: true }}>
        <p className="sectionSubText text-gray-300">Open Source</p>
        <h2 className="sectionHeadText text-white">
          GitHub <span className="text-[#56ccf2]">Activity</span>
        </h2>
        
        {/* ĐÂY LÀ ĐOẠN TEXT MỚI THÊM VÀO */}
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 dark:text-ctnSecondaryDark text-gray-400 text-[17px] max-w-3xl leading-[30px]"
        >
          A look at my recent contributions, open-source projects, and coding activity. Currently working on these!
        </motion.p>
      </motion.div>

      {/* --- PHẦN 1: CONTRIBUTION GRAPH (2026) --- */}
      <motion.div
        variants={fadeIn("up", "spring", 0.3, 0.75)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mt-10 bg-[#1e2130] rounded-3xl p-6 md:p-10 border border-white/10 shadow-card"
      >
        <h3 className="text-white font-bold text-[22px] mb-6 text-center md:text-left">Contribution Graph</h3>
        
        <div className="overflow-x-auto pb-4 scrollbar-hide">
          <div className="flex justify-between mb-2 text-gray-500 text-[11px] min-w-[800px] px-1">
             {months.map(m => <span key={m} className="w-[60px] text-center">{m}</span>)}
          </div>

          <div className="flex flex-col flex-wrap h-[115px] gap-[4px] min-w-[800px]">
            {data2026.map((day) => (
              <div
                key={day.date}
                style={{ backgroundColor: levelColors[day.level] }}
                className="w-[13px] h-[13px] rounded-[2px] relative group/item shrink-0"
              >
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden">
                  <div className="bg-black text-white text-[10px] py-1 px-2 rounded whitespace-nowrap border border-gray-700 shadow-xl">
                    {day.count} contributions on {day.date}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-4 flex justify-between items-center text-[13px] text-gray-400 border-t border-gray-800 pt-4">
           <span>
             <strong className="text-[#56ccf2]">{total2026} contributions</strong> in 2026
           </span>
           <div className="flex items-center gap-2">
              <span className="text-[11px]">Less</span>
              <div className="flex gap-[3px]">
                {levelColors.map((color, i) => (
                  <div key={i} className="w-[11px] h-[11px] rounded-[2px]" style={{ backgroundColor: color }} />
                ))}
              </div>
              <span className="text-[11px]">More</span>
           </div>
        </div>
      </motion.div>

      {/* --- PHẦN 2: OPEN-SOURCE CONTRIBUTIONS (Ảnh SVG từ Workflow) --- */}
      <motion.div
        variants={fadeIn("up", "spring", 0.6, 0.75)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mt-10 bg-[#f0f4f8] rounded-3xl p-6 md:p-10 border border-white/10 shadow-xl"
      >
        <h3 className="text-[#1a2a3a] font-black text-[24px] mb-8 flex items-center gap-2">
          🛠️ Open-Source Contributions
        </h3>

        <div className="w-full flex justify-center overflow-hidden">
          <img 
            src={`https://raw.githubusercontent.com/tin2709/tin2709/main/contributions.svg?t=${new Date().getTime()}`} 
            alt="GitHub Contributions" 
            className="w-full max-w-5xl h-auto rounded-xl shadow-inner"
            onError={(e) => {
               e.target.src = "https://github-readme-stats.vercel.app/api?username=tin2709&theme=radical&show_icons=true";
            }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default OpenSource;
