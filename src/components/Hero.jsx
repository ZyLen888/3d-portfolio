import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  const isMobile = window.innerWidth < 640;
  return (
    <section class="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#50A060]" />
          <div className="w-1 sm:h-80 h-40 green-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#50A060]">Zhen</span> 👋
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Developing Web App,
            <br class="sm:hidden" /> AI / ML and Fun Stuff.
          </p>
          <h2 className={`${styles.sectionSubText} mt-2 text-white-100 mb-4 underline`}>
            {isMobile
              ? "Swipe down to see more about me!"
              : 'Things are "playable" on this page, try rotating the Mac (Since I am a Mac user) below!'}
          </h2>
          <h2 className={`${styles.sectionSubText} mt-2 text-white-100 font-bold`}>
            {isMobile
              ? "For full 3D experience with this page, please view it with a computer. 👀 "
              : null}
          </h2>
        </div>
      </div>
      {isMobile ? null : <ComputersCanvas />}
      <div className="absolute xs:bottom-10 bottom-32 w-full flex pr-12 justify-end items-start">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 boarder-secondary flex justify-center items-start p-2">
            <motion.dev
              animate={{
                y: [0, 25, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
