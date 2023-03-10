import { motion } from "framer-motion";
import type { Dispatch, SetStateAction } from "react";
import { Section } from "./Content";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

const HeroButton = ({
  currentSection,
  setCurrentSection,
}: {
  currentSection: Section;
  setCurrentSection: Dispatch<SetStateAction<Section>>;
}) => {
  return (
    <div className="flex overflow-hidden space-y-2 flex-col md:flex-row md:space-y-0  w-full mx-auto max-w-xl rounded-lg md:items-center md:space-x-4 mt-12 ">
      <motion.button
        initial={{ translateY: "150%" }}
        animate={
          currentSection === Section.HERO
            ? { translateY: "0%" }
            : { translateY: "150%" }
        }
        transition={{ delay: 3.5 }}
        onClick={() => {
          setCurrentSection(Section.DEV_STACK);
        }}
        className=" w-full px-5 py-2.5 relative h-max inline-flex items-center justify-center p-0.5 overflow-hidden font-medium text-white rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800"
      >
        Development Stack
      </motion.button>
      <motion.button
        initial={{ translateY: "150%" }}
        animate={
          currentSection === Section.HERO
            ? { translateY: "0%" }
            : { translateY: "150%" }
        }
        transition={{ delay: 3.5 }}
        onClick={() => {
          setCurrentSection(Section.PROJECTS);
        }}
        className=" w-full px-5 py-2.5 relative h-max inline-flex items-center justify-center p-0.5 overflow-hidden font-medium text-white rounded-lg group bg-gradient-to-br from-yellow-500 to-lime-400 via-teal-500  justy-center"
      >
        Projects
        <ArrowRightIcon className="w-5 h-5 ml-2" />
      </motion.button>
    </div>
  );
};

export default HeroButton;
