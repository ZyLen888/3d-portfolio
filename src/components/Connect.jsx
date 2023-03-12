import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { socialMedia } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const SocialMediaCard = ({ index, name, image, source_code_link }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-white p-2 rounded-3xl w-full lg:w-[240px]"
      >
        <div
          className="relative w-full h-full"
          onClick={() => window.open(source_code_link, "_blank")}
        >
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
      </Tilt>
    </motion.div>
  );
};

const Connect = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Social Media</p>
        <h2 className={styles.sectionHeadText}>Connect with me.</h2>
      </motion.div>
      <div className="mt-20 flex gap-20 justify-center">
        {socialMedia.map((socialMedia, index) => (
          <SocialMediaCard key={`socialMedia-${index}`} index={index} {...socialMedia} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Connect, "");
