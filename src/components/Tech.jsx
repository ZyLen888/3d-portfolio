import React from "react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import Tilt from "react-tilt";

const TechnologyCard = ({ index, name, icon }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-white p-2 rounded-2xl w-full lg:w-[240px]"
      >
        <div className="relative w-[80px] h-[80px]">
          <img src={icon} alt={name} className="w-full h-full object-cover rounded-2xl" />
        </div>
      </Tilt>
    </motion.div>
  );
};

const Tech = () => {
  const isMobile = window.innerWidth < 640;
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My growing list of used and learned</p>
        <h2 className={`${styles.sectionHeadText} mb-2`}>🛠 Technology</h2>
        <p className={`${styles.sectionSubText} mb-2`}>
          {isMobile
            ? "Due to mobile environment support on Three.js, the 3D interactive elements below have been hidden."
            : "Balls are playable, click on them and rotate them!"}
        </p>
        <p className={`${styles.sectionSubText} mb-10`}>
          For more details on each skill, please go to my LinkedIn.
        </p>
      </motion.div>

      <div className="mt-20 flex gap-20 justify-center">
        {isMobile ? (
          <div
            className="mt-20 flex-wrap gap-10 justify-center"
            style={{ display: "flex" }}
          >
            {technologies.map((technology, index) => (
              <TechnologyCard key={`technology-${index}`} index={index} {...technology} />
            ))}
          </div>
        ) : (
          <div className="flex flex-row flex-wrap justify-center gap-10">
            {technologies.map((technology) => (
              <div className="w-28 h-28" key={technology.name}>
                <BallCanvas icon={technology.icon} />
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "tech");
