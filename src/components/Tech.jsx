import React from "react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My growing list of used or learned</p>
        <h2 className={`${styles.sectionHeadText} mb-2`}>🛠 Technology</h2>
        <p className={`${styles.sectionSubText} mb-2`}>
          Balls are playable, click on them and rotate them!
        </p>
        <p className={`${styles.sectionSubText} mb-10`}>
          For more details on each skill, please go to my LinkedIn.
        </p>
      </motion.div>
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "tech");
