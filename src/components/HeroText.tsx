import HeroButton from "./HeroButton";
import { delay, motion } from "framer-motion";
import type { Dispatch, SetStateAction } from "react";
import {
  titleContainer,
  titleLetter,
  upperText,
  upperTextLetter,
} from "./animations";
import { Section } from "./Content";

const HeroText = ({
  currentSection,
  setCurrentSection,
}: {
  currentSection: Section;
  setCurrentSection: Dispatch<SetStateAction<Section>>;
}) => {
  return (
    <motion.section
      animate={
        currentSection === Section.HERO
          ? { position: "absolute", top: "0px", right: "0px" }
          : { position: "absolute", top: "0px", right: "0px" }
      }
      className=" bg-gray-800 relatuve z-20 pt-12 h-screen px-6 md:px-0 w-screen flex justify-center flex-col items-center"
    >
      <div className="w-full md:max-w-2xl mx-auto overflow-hidden flex flex-col">
        <motion.h1
          variants={upperText}
          initial="hidden"
          animate={currentSection === Section.HERO ? "show" : "hidden"}
          className="text-3xl md:text-4xl text-pink-500 text-center font-bold"
        >
          <motion.span className="inline-block" variants={upperTextLetter}>
            W
          </motion.span>
          <motion.span className="inline-block" variants={upperTextLetter}>
            e
          </motion.span>
          <motion.span className="inline-block mr-4" variants={upperTextLetter}>
            b
          </motion.span>
          <motion.span className="inline-block" variants={upperTextLetter}>
            d
          </motion.span>
          <motion.span className="inline-block" variants={upperTextLetter}>
            e
          </motion.span>
          <motion.span className="inline-block" variants={upperTextLetter}>
            v
          </motion.span>
          <motion.span className="inline-block" variants={upperTextLetter}>
            e
          </motion.span>
          <motion.span className="inline-block" variants={upperTextLetter}>
            l
          </motion.span>
          <motion.span className="inline-block" variants={upperTextLetter}>
            o
          </motion.span>
          <motion.span className="inline-block" variants={upperTextLetter}>
            p
          </motion.span>
          <motion.span className="inline-block" variants={upperTextLetter}>
            e
          </motion.span>
          <motion.span className="inline-block" variants={upperTextLetter}>
            r
          </motion.span>
        </motion.h1>
        <motion.h1
          variants={titleContainer}
          initial={"hidden"}
          animate={currentSection === Section.HERO ? "show" : "hidden"}
          className="flex  py-1 overflow-hidden items-center mt-4 text-white text-center justify-center w-full text-4xl md:text-7xl font-extrabold"
        >
          <motion.span variants={titleLetter} className="inline-block ">
            F
          </motion.span>
          <motion.span variants={titleLetter} className="inline-block ">
            e
          </motion.span>
          <motion.span variants={titleLetter} className="inline-block ">
            d
          </motion.span>
          <motion.span variants={titleLetter} className="inline-block ">
            e
          </motion.span>
          <motion.span variants={titleLetter} className="inline-block ">
            r
          </motion.span>
          <motion.span variants={titleLetter} className="inline-block ">
            i
          </motion.span>
          <motion.span variants={titleLetter} className="inline-block ">
            c
          </motion.span>
          <motion.span variants={titleLetter} className="inline-block mr-4 ">
            o
          </motion.span>
          <motion.span variants={titleLetter} className="inline-block ">
            T
          </motion.span>
          <motion.span variants={titleLetter} className="inline-block ">
            a
          </motion.span>
          <motion.span variants={titleLetter} className="inline-block ">
            r
          </motion.span>
          <motion.span variants={titleLetter} className="inline-block ">
            g
          </motion.span>
          <motion.span variants={titleLetter} className="inline-block ">
            a
          </motion.span>
        </motion.h1>
        <div className="overflow-hidden">
          <motion.p
            initial={{ translateY: "150%" }}
            animate={
              currentSection === Section.HERO
                ? {
                    translateY: "0%",
                  }
                : { translateY: "150%" }
            }
            transition={{ delay: 3, duration: 1, type: "spring" }}
            className="mb-3 font-light over-flow-hidden md:text-lg text-gray-200 leading-relaxed max-w-2xl mx-auto mt-4 text-center"
          >
            I am a web developer with a passion for creating intuitive and
            engaging user experiences. My skills include expertise in modern web
            technologies and a commitment to staying up to date with the latest
            industry developments. I am a proactive problem-solver, who is
            dedicated to delivering high-quality solutions that exceed
            expectations
          </motion.p>
        </div>
      </div>

      <HeroButton
        currentSection={currentSection}
        setCurrentSection={setCurrentSection}
      />
    </motion.section>
  );
};

export default HeroText;
